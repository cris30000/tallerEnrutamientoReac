import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/AppRouter';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to={ROUTES.HOME} className={styles.logo}>
          <span className={styles.logoIcon}>🛍️</span>
          <span className={styles.logoText}>TechStore</span>
        </Link>
        <nav className={styles.nav}>
          <Link to={ROUTES.HOME} className={styles.navLink}>Inicio</Link>
          <Link to={ROUTES.PRODUCTS} className={styles.navLink}>Todos los productos</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;