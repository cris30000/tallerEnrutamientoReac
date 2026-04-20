import { Link } from "react-router-dom";
import styles from "./Menu.module.css";

function Menu() {
  return (
    <nav className={styles.nav}>
      <Link className={styles.link} to="/">Inicio</Link>
      <Link className={styles.link} to="/productos">Productos</Link>
      <Link className={styles.link} to="/acerca">Acerca</Link>
    </nav>
  );
}

export default Menu;