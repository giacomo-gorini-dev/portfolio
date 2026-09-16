import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";
import imgHome from "../assets/home.png";
import imgBlog from "../assets/blog.png";
import imgSkills from "../assets/skills.png";
import imgContact from "../assets/contact.png";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link to={"/"} className={styles.link}>
            <img src={imgHome} alt="." />
            Home
          </Link>
        </li>
        <li>
          <Link to={"/blog"} className={styles.link}>
            <img src={imgBlog} alt="." />
            Blog
          </Link>
        </li>
        <li>
          <Link to={"/skills"} className={styles.link}>
            <img src={imgSkills} alt="." />
            Skills
          </Link>
        </li>
        <li>
          <Link to={"/contact"} className={styles.link}>
            <img src={imgContact} alt="." />
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
