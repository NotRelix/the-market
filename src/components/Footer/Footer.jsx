import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const usefulLinks = [
    {
      name: "Home",
    },
    {
      name: "Shop",
    },
    {
      name: "Repository",
    },
    {
      name: "My Github",
    },
  ];
  const contacts = [
    {
      name: "LinkedIn",
    },
    {
      name: "Email",
    },
    {
      name: "Github",
    },
    {
      name: "Facebook",
    },
  ];
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
              {usefulLinks.map((link) => (
                <li key={link.name}>{link.name}</li>
              ))}
            </ul>
          </div>
          <div>
            <h1 className={styles.heading}>Contact</h1>
            <ul>
              {contacts.map((link) => (
                <li key={link.name}>{link.name}</li>
              ))}
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
