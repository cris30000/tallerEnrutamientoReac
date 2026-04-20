import { useParams } from "react-router-dom";
import { productos } from "../../data/productos";
import styles from "./Productos.module.css";

function Productos() {
  const { categoria } = useParams();

  const data = categoria
    ? productos.filter((p) => p.categoria === categoria)
    : productos;

  return (
    <div>
        <h1 className={styles.title}>🛒 Catálogo de Productos</h1>

      <div className={styles.grid}>
        {data.map((p) => (
          <div key={p.id} className={styles.card}>
            <h3>{p.nombre}</h3>
            <p className={styles.price}>💰 ${p.precio}</p>
            <span className={styles.tag}>{p.categoria}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Productos;