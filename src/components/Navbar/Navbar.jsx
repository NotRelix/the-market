import styles from "./Navbar.module.css";
import { Menu, ShoppingCart, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

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

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
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
      <div className={`${styles.menuSlider} ${(menuOpen) ? "" : styles.hidden}`}>
        <hr />
        <Link to={'/'} className={styles.menuLink} onClick={toggleMenu} >Home</Link>
        <Link to={'shop'} className={styles.menuLink} onClick={toggleMenu}>Shop</Link>
      </div>
      <div onClick={() => setMenuOpen(false)} className={`${styles.backdrop} ${(menuOpen) ? "" : styles.backdropHidden}`}></div>
      <div className={`${styles.cartSlider} ${(cartOpen) ? "" : styles.hidden}`}>
        <X className={styles.closeCart} onClick={() => setCartOpen(false)} />
        <hr />
        {/* Cart Items */}
      </div>
      <div onClick={() => setCartOpen(false)} className={`${styles.cartBackdrop} ${(cartOpen) ? "" : styles.backdropHidden}`}></div>
    </>
  );
};

export default Navbar;
