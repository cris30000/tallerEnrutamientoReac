import styles from "./Services.module.css";

function Services() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Services</h1>
        <p className={styles.subtitle}>
          What we offer to our clients
        </p>
      </div>

      <div className={styles.content}>
        <div className={styles.cardGrid}>
          <div className={styles.card}>Service 1</div>
          <div className={styles.card}>Service 2</div>
          <div className={styles.card}>Service 3</div>
        </div>
      </div>
    </div>
  );
}

export default Services;