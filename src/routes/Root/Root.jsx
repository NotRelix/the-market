import { useRef, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Root.module.css";
import { Outlet } from "react-router-dom";
import SuccessMessage from "../../components/SuccessMessage/SuccessMessage";

const Root = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [successMessage, setSuccessMessage] = useState(false);
  const hideTimerRef = useRef(null);

  function addToCart(product, id, count) {
    setCart((prev) => {
      const exists = prev.find((item) => item.product.id === id);
      if (exists) {
        return prev.map((item) =>
          item.product.id === id
            ? { ...item, quantity: item.quantity + count }
            : item
        );
      } else {
        return [...prev, { product, quantity: count }];
      }
    });
  }

  function editCart(product, id, count) {
    setCart((prev) => {
      const exists = prev.find((item) => item.product.id === id);
      if (exists) {
        return prev.map((item) =>
          item.product.id === id ? { ...item, quantity: count } : item
        );
      } else {
        return [...prev, { product, quantity: count }];
      }
    });
  }

  function deleteProduct(id) {
    setCart((prev) => {
      return prev.filter((item) => item.product.id !== id);
    });
  }

  function handleAddToCart(product, productId, quantity) {
    addToCart(product, productId, quantity);

    setSuccessMessage(false);

    setTimeout(() => {
      setSuccessMessage(true);

      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);

      hideTimerRef.current = setTimeout(() => {
        setSuccessMessage(false);
      }, 2000);
    }, 10);
  }

  return (
    <div className={styles.container}>
      <Navbar cart={cart} editCart={editCart} deleteProduct={deleteProduct} />
      <main>
        <SuccessMessage visible={successMessage} />
        <Outlet context={{ loading, setLoading, addToCart, handleAddToCart }} />
      </main>
      <Footer />
    </div>
  );
};

export default Root;
