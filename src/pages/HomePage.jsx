import styles from "./HomePage.module.css";

import SpiralBackground from "../components/SpiralBackground";

import BlogPreview from "../components/BlogPreview";

import { Link } from "react-router-dom";

import usePosts from "../hooks/usePosts";

import imgProfile from "../assets/profilePhoto.png";

import imgItaly from "../assets/italyFlag.svg";

function HomePage() {
  const { posts, isLoading, error, refetch } = usePosts();
  const bestProjects=posts?.filter((p)=>p.is_best);
  return (
    <section className={styles.home}>
      <SpiralBackground />

      <div className={styles.info}>
        <div className={styles["info-main"]}>
          <div>
            <h1>Giacomo Gorini</h1>
            <h2>Web Developer and CS student</h2>
            <div>
              From <h3>concept</h3> to <h3>code</h3>: building <h3>websites</h3>{" "}
              that actually <h3>feel good</h3> to <h3>use</h3>
            </div>
          </div>

          <div className={styles["general-info"]}>
            <a
              className={styles.where}
              href="https://maps.app.goo.gl/JCrDS27xz7c7ULX76"
              target="_blank"
            >
              Based in Varese, MI | Italy{" "}
              <img src={imgItaly} alt="." className={styles.italy} />
            </a>

            <div>
              <span>Status</span>
              <span className={styles.badge}>Open to Work</span>
            </div>
          </div>
        </div>

        <img src={imgProfile} alt="." className={styles.profile} />
      </div>

      <div className={styles["best-projects"]}>
        <h2>My Best Projects</h2>

        {isLoading && (
          <div className={styles.loaderContainer}>
            <span>Loading Projects</span>
            <div className={styles.loadingDots}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}

        {error && (
          <div className={styles.error}>
            <span>Something gone wrong</span>

            <button onClick={() => refetch()}>Try Again</button>
          </div>
        )}

        {!isLoading &&
          !error &&
          (bestProjects.length == 0 ? (
            <h2 style={{ color: "var(--text-secondary)", fontSize: "1.3rem" }}>
              Nothing to see here yet!
            </h2>
          ) : (
            bestProjects.map((post) => (
              <BlogPreview key={post.id} post={post}></BlogPreview>
            ))
          ))}
      </div>
      <div className={styles.CTA}>
        <Link to={"/blog"} className={styles["link-CTA"]}>
          View my work
        </Link>
        <Link to={"/contact"} className={styles["link-CTA"]}>
          Contact me
        </Link>
      </div>
    </section>
  );
}

export default HomePage;
