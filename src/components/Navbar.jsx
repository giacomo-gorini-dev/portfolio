import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";
import imgHome from "../assets/home.png";
import imgBlog from "../assets/blog.png";
import imgSkills from "../assets/skills.png";
import imgContact from "../assets/contact.png";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h2>Menu</h2>
      <ul>
        <li>
          <Link to={"/"} className={styles.link}>
            Home
            <img src={imgHome} alt="." />
          </Link>
        </li>
        <li>
          <Link to={"/blog"} className={styles.link}>
            Blog
            <img src={imgBlog} alt="." />
          </Link>
        </li>
        <li>
          <Link to={"/skills"} className={styles.link}>
            Skills
            <img src={imgSkills} alt="." />
          </Link>
        </li>
        <li>
          <Link to={"/contact"} className={styles.link}>
            Contact
            <img src={imgContact} alt="." />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
