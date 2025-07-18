import PropTypes from "prop-types";
import styles from "./CounterInput.module.css";

const VARIANTS = {
  DEFAULT: "default",
  CART_SLIDER: "cartSlider",
};

const CounterInput = ({
  quantity,
  setQuantity,
  variant = VARIANTS.DEFAULT,
}) => {
  function handleMinus() {
    if (quantity <= 1) return;
    setQuantity((prev) => prev - 1);
  }

  function handlePlus() {
    setQuantity((prev) => prev + 1);
  }

  function handleChange(e) {
    if (e.target.value === "") {
      setQuantity(1);
      return;
    }
    if (e.target.value < 1) return;
    setQuantity(e.target.value);
  }
  return (
    <div
      className={`${styles.quantityContainer}
        ${(variant === VARIANTS.CART_SLIDER) ? styles.cartSlider : ""}
      }`}
    >
      <button className={styles.minus} onClick={handleMinus}>
        -
      </button>
      <input
        min="1"
        className={styles.quantityInput}
        type="number"
        value={quantity}
        onChange={handleChange}
      />
      <button className={styles.plus} onClick={handlePlus}>
        +
      </button>
    </div>
  );
};

CounterInput.propTypes = {
  quantity: PropTypes.number,
  setQuantity: PropTypes.func,
  variant: PropTypes.string,
};

export default CounterInput;
