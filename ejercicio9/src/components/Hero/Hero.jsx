import styles from "./Hero.module.css";
import heroImg from "../../assets/images/hero1.jpg";

function Hero() {
  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className={styles.overlay}>
        <h1>Professional Business Template</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className={styles.buttons}>
          <button className={styles.primary}>LEARN MORE</button>
          <button className={styles.secondary}>WATCH VIDEO</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;