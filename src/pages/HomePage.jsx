import styles from "./HomePage.module.css";
import SpiralBackground from "../components/SpiralBackground";
import BlogPreview from "../components/BlogPreview";
import { Link } from "react-router-dom";
import usePosts from "../hooks/usePosts";
function HomePage() {
  const { data: posts, isLoading, error, refetch } = usePosts();
  const bestProjects = posts?.filter((p) => p.is_best) || [];
  return (
    <section className={styles.home}>
      <SpiralBackground />
      <div className={styles.info}>
        <div className={styles["info-main"]}>
          <h1>Giacomo Gorini</h1>
          <h2>Web Developer and CS student</h2>
          <div>
            From <h3>concept</h3> to <h3>code</h3>: building <h3>websites</h3>{" "}
            that actually <h3>feel good</h3> to <h3>use</h3>
          </div>
        </div>
        <div className={styles["general-info"]}></div>
      </div>
      <div className={styles["best-projects"]}>
        {isLoading && <h3>Loading Best Projects...</h3>}
        {error && (
          <div>
            <h3>Something gone wrong</h3>
            <button onClick={() => refetch()}>Try Again</button>
          </div>
        )}
        {!isLoading && !error && (bestProjects.length == 0 ? (
          <h2>Nothing to see here yet!</h2>):(
            bestProjects.map((post)=>(
              <BlogPreview
                key={post.id}
                post={post}
              ></BlogPreview>
            ))
          ))
        }
        
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
