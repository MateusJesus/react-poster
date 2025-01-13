import { MdMessage, MdPostAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  margin: 0 10%;
  padding: 1rem;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  border-bottom: 2px solid #ece1fa;
  h2 {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }
  a {
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    background-color: #a990fb;
    color: #2a2630;
    border: none;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    font-weight: bold;
  }
  a:hover {
    background-color: #8c6cf7;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div>
        <h2>
          <MdMessage />
          React Poster
        </h2>
      </div>
      <div>
        <Link to={"/create-post"}>
          <MdPostAdd size={19} />
          New Post
        </Link>
      </div>
    </StyledHeader>
  );
};

export default Header;
