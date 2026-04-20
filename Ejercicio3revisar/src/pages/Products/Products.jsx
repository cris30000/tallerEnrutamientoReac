import { useParams } from 'react-router-dom';
import { products } from '../../data/products';
import ProductCard from '../../components/ProductCard/ProductCard';
import CategoryFilter from '../../components/CategoryFilter/CategoryFilter';
import styles from './Products.module.css';

const Products = () => {
  const { categoria } = useParams();
  
  const filteredProducts = categoria 
    ? products.filter(product => product.category === categoria)
    : products;

  const getPageTitle = () => {
    if (!categoria) return 'Todos los productos';
    const categoryNames = {
      electronics: 'Electrónica',
      clothing: 'Ropa',
      books: 'Libros'
    };
    return categoryNames[categoria] || categoria;
  };

  return (
    <div className={styles.productsPage}>
      <CategoryFilter />
      
      <div className={styles.header}>
        <h1 className={styles.title}>{getPageTitle()}</h1>
        <p className={styles.count}>
          {filteredProducts.length} producto{filteredProducts.length !== 1 ? 's' : ''} encontrado{filteredProducts.length !== 1 ? 's' : ''}
        </p>
      </div>

      {filteredProducts.length > 0 ? (
        <div className={styles.grid}>
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className={styles.empty}>
          <p>No hay productos en esta categoría</p>
        </div>
      )}
    </div>
  );
};

export default Products;