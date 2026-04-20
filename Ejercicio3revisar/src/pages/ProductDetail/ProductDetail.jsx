import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../../data/products';
import styles from './ProductDetail.module.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className={styles.notFound}>
        <h2>Producto no encontrado</h2>
        <button onClick={() => navigate(-1)} className={styles.backButton}>
          Volver al catálogo
        </button>
      </div>
    );
  }

  return (
    <div className={styles.detailPage}>
      <button onClick={() => navigate(-1)} className={styles.backButton}>
        ← Volver al catálogo
      </button>
      
      <div className={styles.productContainer}>
        <div className={styles.imageSection}>
          <img src={product.image} alt={product.name} className={styles.productImage} />
        </div>
        
        <div className={styles.infoSection}>
          <h1 className={styles.productTitle}>{product.name}</h1>
          <div className={styles.categoryBadge}>{product.category}</div>
          <p className={styles.productDescription}>{product.description}</p>
          <div className={styles.productPrice}>${product.price}</div>
          <button className={styles.buyButton}>
            Comprar ahora
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;