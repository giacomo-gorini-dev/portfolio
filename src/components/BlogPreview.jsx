import styles from "./BlogPreview.module.css"
function BlogPreview({post}){
    return(
        <div className={styles.card}>
            <img src={post.media_urls} alt="Post's picture" />
            <h2>{post.title}</h2>
        </div>
    );
}
export default BlogPreview;