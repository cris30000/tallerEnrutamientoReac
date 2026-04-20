import { Link } from "react-router-dom";
import { productos } from "../../data/productos";
import styles from "./Productos.module.css";

function Productos() {
  return (
    <div className={styles.grid}>
      {productos.map((p) => (
        <div key={p.id} className={styles.card}>
          <h3>{p.nombre}</h3>
          <p>💰 ${p.precio}</p>

          <Link to={`/producto/${p.id}`}>
            Ver detalle
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Productos;