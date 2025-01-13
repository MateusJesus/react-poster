import { useEffect, useState } from "react";
import Post from "./Post"
import PostStyle from "./Post.module.css";
import { useLoaderData } from "react-router-dom";

const PostsList = () => {

  const AllPosts = useLoaderData()

  return (
    <>
      {AllPosts.length > 0 ?
        <ul className={PostStyle.posts}>
          {AllPosts?.map((post, index) => <Post postName={post.name} postText={post.text} key={index} />)}
        </ul >
        :
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h1>There are no posts yet.</h1>
          <p>Start adding some!</p>
        </div>
      }

    </>
  )
}

export default PostsList