import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <h2>📊 Dashboard</h2>

      <NavLink to="/productos" className={styles.link}>
        🛒 Todos
      </NavLink>

      <NavLink to="/productos/tecnologia" className={styles.link}>
        💻 Tecnología
      </NavLink>

      <NavLink to="/productos/hogar" className={styles.link}>
        🏠 Hogar
      </NavLink>
    </div>
  );
}

export default Sidebar;