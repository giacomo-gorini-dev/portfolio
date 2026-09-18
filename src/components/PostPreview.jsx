import styles from "./PostPreview.module.css"
function PostPreview({post}){
    return(
        <div className={styles.card}>
            <img src={post.media_urls} alt="Post's picture" />
            <h2>{post.title}</h2>
        </div>
    );
}
export default PostPreview;