import React from 'react';
import Post from './Post';

const PostContainer = (props) => (
  <div className="posts">
    {props.posts.map((post, index) => (
      <Post {...post} key={index} />
    ))}
  </div>
)

export default PostContainer;
