import styles from "./Navbar.module.css";
import { Menu, ShoppingCart } from "lucide-react";
import PropTypes from "prop-types";
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
  function toggleMenu() {
    setMenuOpen(!menuOpen);
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
          <ShoppingCart className={styles.shoppingCart} />
        </div>
      </nav>
      <Menu onClick={toggleMenu} className={styles.menu} />
      <div className={`${styles.menuSlider} ${(menuOpen) ? "" : styles.hidden}`}>
        <Link to={'/'} className={styles.menuLink} onClick={toggleMenu} >Home</Link>
        <Link to={'shop'} className={styles.menuLink} onClick={toggleMenu}>Shop</Link>
      </div>
      <div className={`${styles.backdrop} ${(menuOpen) ? "" : styles.backdropHidden}`}></div>
    </>
  );
};

export default Navbar;
