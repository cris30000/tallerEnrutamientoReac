import { useParams } from "react-router-dom";
import { productos } from "../../data/productos";
import styles from "./ProductoDetalle.module.css";

function ProductoDetalle() {
  const { id } = useParams();

  const producto = productos.find(
    (p) => p.id === parseInt(id)
  );

  if (!producto) {
    return <h2>❌ Producto no encontrado</h2>;
  }

  return (
    <div className={styles.card}>
      <h1>{producto.nombre}</h1>

      <p><strong>Tipo:</strong> {producto.tipo}</p>
      <p><strong>Descripción:</strong> {producto.descripcion}</p>
      <p><strong>Precio:</strong> 💰 ${producto.precio}</p>
      <p><strong>Stock:</strong> {producto.stock} unidades</p>

      {/* estado visual */}
      <p>
        {producto.stock > 0
          ? "🟢 Disponible"
          : "🔴 Agotado"}
      </p>
    </div>
  );
}

export default ProductoDetalle;