import PropTypes from "prop-types";
import styles from "./CartCardSlider.module.css";
import { X } from "lucide-react";

const CartCardSlider = ({ item }) => {
  function handleMinus() {}

  function handlePlus() {}

  function handleChange() {}

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={item.product.image} alt="" />
      </div>
      <div className={styles.textContainer}>
        <X className={styles.deleteItem} />
        <h1>{item.product.title}</h1>
        <div className={styles.bottomContainer}>
          <div className={styles.quantityContainer}>
            <button className={styles.minus} onClick={handleMinus}>
              -
            </button>
            <input
              min="1"
              className={styles.quantityInput}
              type="number"
              value={item.quantity}
              onChange={handleChange}
            />
            <button className={styles.plus} onClick={handlePlus}>
              +
            </button>
          </div>
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
  }),
  quantity: PropTypes.number,
};

export default CartCardSlider;
