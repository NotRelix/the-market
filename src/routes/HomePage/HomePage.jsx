import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <section className="homeContainer">
      <div className={styles.heroSection}>
        <h1>Home Page</h1>
        <Link to={"/shop"}>Shop Now</Link>
      </div>
      <div className={styles.backgroundGradient}></div>
    </section>
  );
};

export default HomePage;
