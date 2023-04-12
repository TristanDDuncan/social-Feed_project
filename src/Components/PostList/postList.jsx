import React from 'react';
import Post from '../Post/Post';

const postList = (props) => {
    console.log(props.posts);
  return (
    <div>
      {props.posts
      .map((post, index) => (
        <Post key={index} name={post.name} body={post.body} likes={post.likes} dislikes={post.dislikes}  />
      ))
      .reverse()}
    </div>
  );
};

export default postList;