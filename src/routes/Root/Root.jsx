import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Root.module.css";
import { Outlet } from "react-router-dom";

const Root = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  function addToCart(product, id, count) {
    setCart((prev) => {
      const exists = prev.find((item) => item.product.id === id);
      if (exists) {
        return prev.map((item) =>
          item.product.id === id ? { ...item, quantity: item.quantity + count } : item
        );
      } else {
        return [...prev, { product, quantity: count }];
      }
    });
  }
  console.log(cart);
  return (
    <div className={styles.container}>
      <Navbar cart={cart} />
      <main>
        <Outlet context={{ loading, setLoading, addToCart }} />
      </main>
      <Footer />
    </div>
  );
};

export default Root;
