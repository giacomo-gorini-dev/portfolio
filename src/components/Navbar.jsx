import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";
import imgHome from "../assets/home.png";
import imgBlog from "../assets/blog.png";
import imgSkills from "../assets/skills.png";
import imgContact from "../assets/contact.png";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.profile}>
          <div>Giacomo</div>
          <div>Gorini</div>
          <div>Portfolio</div>
      </div>
      <ul className={styles["ul-part"]}>
        <li className={styles.link}>
          <img src={imgHome} alt="." />
          <Link to={"/"} className={styles["link-text"]}>
            Home
          </Link>
        </li>
        <li className={styles.link}>
          <img src={imgBlog} alt="." />
          <Link to={"/blog"} className={styles["link-text"]}>
            Blog
          </Link>
        </li>
        <li className={styles.link}>
          <img src={imgSkills} alt="." />
          <Link to={"/skills"} className={styles["link-text"]}>
            Skills
          </Link>
        </li>
        <li className={styles.link}>
          <img src={imgContact} alt="." />
          <Link to={"/contact"} className={styles["link-text"]}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
