import styles from "./Navbar.module.css";
import { Menu, ShoppingCart } from "lucide-react";
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
  return (
    <nav>
      <h1>The Market</h1>
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
        <ShoppingCart />
        <Menu className={styles.menu} />
      </div>
    </nav>
  );
};

export default Navbar;
