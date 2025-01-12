import { useState } from "react";
import Header from "./components/Header"
import Posts from "./components/Posts"
import ModalPost from "./components/ModalPost";
import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";

const MainStyled = styled.main`
    height: 100%;
    min-height: 100vh;
    margin:0;
    background: rgb(94,8,255);
    background: linear-gradient(0deg, rgba(94,8,255,1) 0%, rgba(136,48,190,1) 100%);
`
function App() {

  const [AllPosts, setAllPosts] = useState([])
  const [Modal, setModal] = useState(null)

  const CreatePost = (post) => {
    setAllPosts((prevPosts) => [...prevPosts, post]);
  }

  const OpenModalPost = () => {
    setModal(1)
  }

  return (
    <MainStyled>
      <GlobalStyles />
      <ModalPost Post={(post) => CreatePost(post)} close={() => setModal(null)} modal={Modal} />
      <Header OpenModalPost={OpenModalPost} />
      <Posts AllPosts={AllPosts} />
    </MainStyled>
  )
}

export default App
