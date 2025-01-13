import { Link } from "react-router-dom";
import stylePost from "./index.module.css";
import styled from "styled-components";

const LiStyled = styled.li`
  a {
    text-decoration: none;
  }
`;

const Post = ({ id, postName, postText }) => {
  return (
    <LiStyled className={stylePost.post}>
      <Link to={id}>
        <h4 className={stylePost.name}>{postName}</h4>
        <p className={stylePost.text}>{postText}</p>
      </Link>
    </LiStyled>
  );
};

export default Post;
