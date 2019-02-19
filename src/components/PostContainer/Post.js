import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './Posts.css';

const Post = (props) => (
  <article className="post">
    <div className="content">
      <div className="top">
        <img src={props.thumbnailUrl} alt="profile pic" />
        <div className="username">
          {props.username}
        </div>
      </div>
      <img src={props.imageUrl} alt="post image" />
      <div className="icons">
        <i className="far fa-heart"></i>
        <i className="far fa-comment"></i>
      </div>
      <div className="likes">
        {props.likes} likes
      </div>
    </div>
    <CommentSection comments={props.comments} timestamp={props.timestamp} />
  </article>
)

export default Post;
