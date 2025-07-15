import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Root.module.css";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Root;
