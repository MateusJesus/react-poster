import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Posts, { loader as postLoader } from './components/routes/Posts.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './components/routes/RootLayout.jsx'
import NewPost, { action as newPostAction } from './components/PostsList/NewPost/index.jsx'
import GlobalStyles from './components/GlobalStyles/index.jsx'
import styled from 'styled-components'

const MainStyled = styled.main`
    height: 100%;
    min-height: 100vh;
    margin:0;
    background: rgb(94,8,255);
    background: linear-gradient(0deg, rgba(94,8,255,1) 0%, rgba(136,48,190,1) 100%);
`

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{
      path: '/',
      element: <Posts />,
      loader: postLoader,
      children: [{
        path: '/create-post',
        element: <NewPost />,
        action: newPostAction,
      }]
    }],
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <MainStyled>
      <RouterProvider router={router} />
    </MainStyled>
  </StrictMode>,
)
