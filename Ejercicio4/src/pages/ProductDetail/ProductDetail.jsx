import { useParams, Link } from "react-router-dom";
import { products } from "../../data/products";
import styles from "./ProductDetail.module.css";

const ProductDetail = () => {
  const { code } = useParams();

  const product = products.find((p) => p.code === code);

  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <div className={styles.container}>
      <h1>Detalle del Producto</h1>

      <p><strong>Nombre:</strong> {product.name}</p>
      <p><strong>Código:</strong> {product.code}</p>
      <p><strong>Precio:</strong> ${product.price}</p>
      <p><strong>Descripción:</strong> {product.description}</p>

      <Link to="/productos" className={styles.back}>
        Volver
      </Link>
    </div>
  );
};

export default ProductDetail;