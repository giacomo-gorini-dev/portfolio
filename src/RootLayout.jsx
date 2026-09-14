import { Outlet, NavLink } from "react-router-dom";
import ImgHome from "./assets/home.png";
import ImgBlog from "./assets/blog.png";
import ImgSkills from "./assets/skills.png";
import ImgContact from "./assets/contact.png";
import ImgLogo from "./assets/portfolio.png";
import styles from "./RootLayout.module.css";
function RootLayout(){
    return(
        <>
        <aside>
            <nav>
                <div className={styles["brand-container"]}>
                    <NavLink to={"/"}>
                        <img src={ImgLogo} alt="Giacomo Gorini - Portfolio" />
                        <span>portfolio</span>
                    </NavLink>
                </div>
                <ul>
                    <li>
                        <NavLink to={"/"} className={styles["nav-link"]}>
                            <img src={ImgHome} alt="🏠" />
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/blog"} className={styles["nav-link"]}>
                            <img src={ImgBlog} alt="🌐" />
                            Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/skills"} className={styles["nav-link"]}>
                            <img src={ImgSkills} alt="💡" />
                            Skills</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/contact"} className={styles["nav-link"]}>
                            <img src={ImgContact} alt="📩" />
                            Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
        <main id="main-content" className={styles["page-container"]}>
            <Outlet></Outlet>
        </main> 
        </>
    );
}
export default RootLayout;
