import { useLoaderData, Link } from 'react-router-dom';
import Modal from '../../Modal';
import styled from 'styled-components';

const PostStyled = styled.main`
    display: flex;
    flex-direction: column;
    gap: 1em;
    background-color: #f2f2f2;
    padding: 1rem;
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    h1{
      font-size: 0.8rem;
      font-weight: bold;
      color: #543280;
      margin: 0;
      text-transform: uppercase;
    }
    p{
      white-space: pre-wrap;
      font-size: 1.25rem;
      margin: 0.25rem 0 0 0;
      color: #593884;
      font-style: italic;
    }
    
    a{    
      text-decoration: none;
    }
`

function PostDetails() {
  const post = useLoaderData();
  if (!post) {
    return (
      <Modal>
        <PostStyled>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to=".." >
              Okay
            </Link>
          </p>
        </PostStyled>
      </Modal>
    );
  }
  return (
    <Modal>
      <PostStyled >
        <p >{post.name}</p>
        <p >{post.text}</p>
        <Link to=".." >
          Okay
        </Link>
      </PostStyled>
    </Modal>
  );
}

export default PostDetails;

export async function loader({ params }) {
  const response = await fetch("http://localhost:8080/posts/" + params.id)
  const resData = await response.json();
  return resData.post
}