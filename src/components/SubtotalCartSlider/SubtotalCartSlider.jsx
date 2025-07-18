import { Link } from "react-router-dom";
import styles from "./SubtotalCartSlider.module.css";
import PropTypes from "prop-types";

const SubtotalCartSlider = ({ total, setCartOpen }) => {
  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <div className={styles.textContainer}>
          <span className={styles.subtotalHeading}>Subtotal</span>
          <span className={styles.description}>
            Shipping and taxes included at checkout.
          </span>
        </div>
        <span className={styles.total}>${total}</span>
      </div>
      <div className={styles.bottomContainer}>
        <Link
          to={"checkout"}
          onClick={() => setCartOpen(false)}
          className={styles.checkout}
        >
          Checkout
        </Link>
        <Link
          to={"shop"}
          onClick={() => setCartOpen(false)}
          className={styles.continueShopping}
        >
          or Continue Shopping
        </Link>
      </div>
    </div>
  );
};

SubtotalCartSlider.propTypes = {
  total: PropTypes.number,
  setCartOpen: PropTypes.func,
};

export default SubtotalCartSlider;
