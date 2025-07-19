import { Link } from "react-router-dom";
import styles from "./footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const usefulLinks = [
    {
      name: "Home",
      link: "",
    },
    {
      name: "Shop",
      link: "shop",
    },
    {
      name: "Repository",
      link: "https://github.com/NotRelix/the-market",
    },
    {
      name: "My Github",
      link: "https://github.com/NotRelix",
    },
  ];
  const contacts = [
    {
      name: "Email",
      link: "mailto:lim.reecesergei@gmail.com",
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com/reecesergei.lim",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/reece-sergei-lim-059b28240/",
    },
  ];
  return (
    <footer>
      <div className={styles.mainContainer}>
        <div className={styles.left}>
          <h1 className={styles.brandName}>The Market</h1>
          <p className={styles.description}>
            A very fun project built with React. Learned a lot especially with Vitest, PropTypes, and designing the UI. If you're seeing this, I hope you can see more of my projects. A lot more to come soon!
          </p>
        </div>
        <div className={styles.right}>
          <div>
            <h1 className={styles.heading}>Useful Links</h1>
            <ul>
              {usefulLinks.map((link) => (
                (link.name === 'Home' || link.name === 'Shop')
                  ? <Link className={styles.link} to={link.link} key={link.name}>{link.name}</Link>
                  : <a className={styles.link} target="_blank" rel="noopener noreferrer" href={link.link} key={link.name}>{link.name}</a>
              ))}
            </ul>
          </div>
          <div>
            <h1 className={styles.heading}>Contact</h1>
            <ul>
              {contacts.map((link) => (
                <a className={styles.link} target="_blank" rel="noopener noreferrer" href={link.link} key={link.name}>{link.name}</a>
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
