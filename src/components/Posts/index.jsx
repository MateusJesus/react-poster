import Post from "./Post"
import PostStyle from "./Post.module.css";

const Posts = ({ AllPosts }) => {
    
    return (
        <>
            <ul className={PostStyle.posts}>
                {AllPosts?.map((post, index) => <Post postName={post.name} postText={post.text} key={index} />)}
            </ul >
        </>
    )
}

export default Posts