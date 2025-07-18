import styles from "./Navbar.module.css";
import { Menu, ShoppingCart, X } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CartCardSlider from "../CartCardSlider/CartCardSlider";
import SubtotalCartSlider from "../SubtotalCartSlider/SubtotalCartSlider";
import PropTypes from "prop-types";

const navLinks = [
  {
    name: "Home",
    destination: "",
  },
  {
    name: "Shop",
    destination: "shop",
  },
];

const Navbar = ({ cart, editCart, deleteProduct }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const totalCost = cart
    .reduce((acc, curr) => acc + curr.product.price * curr.quantity, 0)
    .toFixed(2);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  function toggleCart() {
    setCartOpen(!cartOpen);
  }

  return (
    <>
      <nav>
        <Link className={styles.logo}>The Market</Link>
        <div className={styles.links}>
          {navLinks.map((navLink) => (
            <Link
              to={navLink.destination}
              className={styles.link}
              key={navLink.name}
            >
              {navLink.name}
            </Link>
          ))}
          <ShoppingCart onClick={toggleCart} className={styles.shoppingCart} />
        </div>
      </nav>
      <Menu onClick={toggleMenu} className={styles.menu} />
      <div className={`${styles.menuSlider} ${menuOpen ? "" : styles.hidden}`}>
        <span className={styles.menuHeader}>Menu</span>
        <hr />
        <div className={styles.menuLinks}>
          <Link to={"/"} className={styles.menuLink} onClick={toggleMenu}>
            Home
          </Link>
          <Link to={"shop"} className={styles.menuLink} onClick={toggleMenu}>
            Shop
          </Link>
        </div>
      </div>
      <div
        onClick={() => setMenuOpen(false)}
        className={`${styles.backdrop} ${
          menuOpen ? "" : styles.backdropHidden
        }`}
      ></div>
      <div className={`${styles.cartSlider} ${cartOpen ? "" : styles.hidden}`}>
        <div className={styles.topContainer}>
          <span>Shopping Cart</span>
          <X className={styles.closeCart} onClick={() => setCartOpen(false)} />
        </div>
        <hr />

        {cart.length > 0 ? (
          <div className={styles.cartCardContainer}>
            {cart.map((item, index) => {
              return (
                <React.Fragment key={item.product.id}>
                  <CartCardSlider
                    item={item}
                    editCart={editCart}
                    deleteProduct={deleteProduct}
                  />
                  {index < cart.length - 1 && (
                    <hr className={styles.separator} />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        ) : (
          <div className={styles.emptyCart}>
            <ShoppingCart />
            <span>Your Cart is Empty</span>
          </div>
        )}
        <SubtotalCartSlider total={totalCost} setCartOpen={setCartOpen} />
      </div>
      <div
        onClick={() => setCartOpen(false)}
        className={`${styles.cartBackdrop} ${
          cartOpen ? "" : styles.backdropHidden
        }`}
      ></div>
    </>
  );
};

Navbar.propTypes = {
  cart: PropTypes.shape({
    product: PropTypes.shape({
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
  }),
  editCart: PropTypes.func,
  deleteProduct: PropTypes.func,
};

export default Navbar;
