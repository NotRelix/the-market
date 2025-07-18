import PropTypes from "prop-types";
import styles from "./CartCardSlider.module.css";
import { X } from "lucide-react";
import CounterInput from "../CounterInput/CounterInput";
import { useEffect, useState } from "react";

const CartCardSlider = ({ item, editCart }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  useEffect(() => {
    setQuantity(item.quantity);
  }, [item.quantity]);

  useEffect(() => {
    editCart(item.product, item.product.id, quantity)
  }, [quantity]);
  
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={item.product.image} alt="" />
      </div>
      <div className={styles.textContainer}>
        <X className={styles.deleteItem} />
        <h1>{item.product.title}</h1>
        <div className={styles.bottomContainer}>
          <CounterInput quantity={quantity} setQuantity={setQuantity} />
          <span>${(item.product.price * item.quantity).toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

CartCardSlider.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    rating: PropTypes.shape({
      rate: PropTypes.number,
      count: PropTypes.number,
    }),
    quantity: PropTypes.number,
  }),
  editCart: PropTypes.func,
};

export default CartCardSlider;
