import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Root.module.css";
import { Outlet } from "react-router-dom";

const Root = () => {
  const [loading, setLoading] = useState(true);
  return (
    <div className={styles.container}>
      <Navbar />
      <main>
        <Outlet context={{ loading, setLoading }} />
      </main>
      <Footer />
    </div>
  );
};

export default Root;
