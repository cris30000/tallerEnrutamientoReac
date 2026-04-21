import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <h2 className={styles.logo}>Logo</h2>
      <ul className={styles.menu}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li>Works</li>
        <li>Team</li>
        <li>Pricing</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;