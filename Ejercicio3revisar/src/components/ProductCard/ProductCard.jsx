import { Link } from 'react-router-dom'
import styles from './ProductCard.module.css'

const ProductCard = ({ product }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={product.image} alt={product.name} className={styles.image} />
        <div className={styles.overlay}>
          <Link to={`/producto/${product.id}`} className={styles.viewButton}>
            Ver detalles
          </Link>
        </div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{product.name}</h3>
        <p className={styles.description}>{product.description}</p>
        <div className={styles.footer}>
          <span className={styles.price}>${product.price}</span>
          <span className={styles.category}>{product.category}</span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard;