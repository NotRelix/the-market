import { useOutletContext } from "react-router-dom";
import styles from "./CheckoutPage.module.css";
import React from "react";
import CartCardSlider from "../../components/CartCardSlider/CartCardSlider";

const CheckoutPage = () => {
  const { cart, editCart, deleteProduct } = useOutletContext();
  const subTotal = cart
    .reduce((acc, curr) => acc + curr.product.price * curr.quantity, 0);
  const shippingCost = +((subTotal) * 0.01).toFixed(2);
  const tax = (subTotal + shippingCost) * 0.08725;
  const total = subTotal + shippingCost + tax;
  return (
    <div className={styles.container}>
      {/* <h1 className={styles.pageTitle}>Checkout</h1> */}
      <div className={styles.mainContent}>
        <div className={styles.leftContainer}>
          {cart.map((item, index) => {
            return (
              <React.Fragment key={item.product.id}>
                <CartCardSlider
                  item={item}
                  editCart={editCart}
                  deleteProduct={deleteProduct}
                />
                {index < cart.length - 1 && <hr className={styles.separator} />}
              </React.Fragment>
            );
          })}
        </div>
        <div className={styles.rightContainer}>
          <h1 className={styles.summary}>Summary</h1>
          <div className={styles.subtotalContainer}>
            <span>Subtotal</span>
            <span>${subTotal.toFixed(2)}</span>
          </div>
          <div className={styles.shippingContainer}>
            <span>Estimated Shipping & Handling</span>
            <span>${shippingCost.toFixed(2)}</span>
          </div>
          <div className={styles.taxContainer}>
            <span>Estimated Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <hr />
          <div className={styles.totalContainer}>
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
