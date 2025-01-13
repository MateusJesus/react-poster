import stylePost from "./index.module.css"

const Post = ({postName, postText}) => {
    return(
        <li className={stylePost.post}>
            <h4 className={stylePost.name}>{postName}</h4>
            <p className={stylePost.text}>{postText}</p>
        </li>
    )
}

export default Post