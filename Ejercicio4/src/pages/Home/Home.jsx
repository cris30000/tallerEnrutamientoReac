import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <h1>Bienvenido al Dashboard</h1>
      <p>Este es el panel principal del sistema.</p>
    </div>
  );
};

export default Home;