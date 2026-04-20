import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <NavLink className={styles.link} to="/inicio">
        🏠 Inicio
      </NavLink>

      <NavLink className={styles.link} to="/productos">
        🛒 Productos
      </NavLink>

      <NavLink className={styles.link} to="/acerca">
        ℹ️ Acerca
      </NavLink>
    </div>
  );
}

export default Sidebar;