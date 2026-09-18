import styles from "./BlogPage.module.css";
import usePosts from "../hooks/usePosts";
import PostPreview from "../components/PostPreview";
import SpiralBackground from "../components/SpiralBackground";
function BlogPage() {
  const { posts, error, isLoading, refetch } = usePosts();
  return (
    <section className={styles.blog}>
      <SpiralBackground></SpiralBackground>
      <div className={styles.header}>
        <h1>Blog</h1>
        <h2>my projects and my life</h2>
      </div>
      <div className={styles["posts-section"]}>
        {!error &&
          !isLoading &&
          (posts.length > 0 ? (
            posts.map((p) => <PostPreview key={p.id} post={p} />)
          ) : (
            <h2 style={{ color: "var(--text-secondary)", fontSize: "3rem" }}>
              Nothing to see here yet
            </h2>
          ))}
        {error && (
          <div className={styles.error}>
            <span>Something gone wrong</span>

            <button onClick={() => refetch()}>Try Again</button>
          </div>
        )}
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
      </div>
    </section>
  );
}
export default BlogPage;
