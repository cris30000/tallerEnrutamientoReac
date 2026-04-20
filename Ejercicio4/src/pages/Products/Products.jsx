import { Link } from "react-router-dom";
import { products } from "../../data/products";
import styles from "./Products.module.css";

const Products = () => {
  return (
    <div className={styles.container}>
      <h1>Catálogo de Productos</h1>

      <ul className={styles.list}>
        {products.map((product) => (
          <li key={product.code} className={styles.item}>
            <Link
              to={`/productos/${product.code}`}
              className={styles.link}
            >
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;