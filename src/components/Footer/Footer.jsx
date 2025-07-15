import styles from "./footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className={styles.mainContainer}>
        <div className={styles.left}>
          <h1 className={styles.brandName}>The Market</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            perferendis quod iure fuga est, corporis unde assumenda aut,
            numquam, aperiam dolores deleniti dicta sed nulla necessitatibus!
            Recusandae in nulla sit!
          </p>
        </div>
        <div className={styles.right}>
          <div>
            <h1 className={styles.heading}>Useful Links</h1>
            <ul>
              <li>Home</li>
              <li>Shop</li>
              <li>Repository</li>
              <li>My Github</li>
            </ul>
          </div>
          <div>
            <h1 className={styles.heading}>Contact</h1>
            <ul>
              <li>LinkedIn</li>
              <li>Email</li>
              <li>Github</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.bottomSection}>
        <p>@{currentYear} NotRelix. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
