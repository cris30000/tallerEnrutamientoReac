import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.hero}>
        <h1 className={styles.title}>
          Bienvenido a <span className={styles.highlight}>TechStore</span>
        </h1>
        <p className={styles.subtitle}>
          Los mejores productos tecnológicos al mejor precio
        </p>
        <Link to="/products" className={styles.ctaButton}>
          Ver catálogo
        </Link>
      </div>
      
      <div className={styles.features}>
        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>🚚</div>
          <h3>Envío Gratis</h3>
          <p>En compras mayores a $50</p>
        </div>
        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>🛡️</div>
          <h3>Garantía</h3>
          <p>1 año de garantía en todos los productos</p>
        </div>
        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>💳</div>
          <h3>Pago Seguro</h3>
          <p>Múltiples métodos de pago</p>
        </div>
      </div>
    </div>
  );
};

export default Home;