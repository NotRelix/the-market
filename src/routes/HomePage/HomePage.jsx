import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";
import heroImage from '../../assets/hero-image.png'
import ScrollToTop from "../../components/ScrollToTop";

const HomePage = () => {
  return (
    <section className={styles.homeContainer}>
      <ScrollToTop />
      <div className={styles.heroSection}>
        <div className={styles.heroHeader}>
          <h1 className={styles.heroTitle}>
            <span className={styles.titleTop}>Everything</span>
            <span className={styles.titleMiddle}>you need</span>
            <span className={styles.titleBottom}>all in one place</span>
          </h1>
          <p className={styles.titleDescription}>Shop clothes, gadgets, and essentials — curated for your lifestyle.</p>
          <Link className={styles.heroCta} to={"/shop"}>Start Shopping</Link>
        </div>
        <div className={styles.heroImageContainer}>
          <img src={heroImage} alt="" />
        </div>
      </div>
      <div className={styles.backgroundGradient}></div>
    </section>
  );
};

export default HomePage;
