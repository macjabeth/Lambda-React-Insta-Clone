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
      <img src={props.imageUrl} alt="" />
      <div className="icons">
        <i className="far fa-heart"></i>
        <i className="far fa-comment"></i>
      </div>
      <div className="likes">
        {props.likes} likes
      </div>
    </div>
    <CommentSection comments={props.comments} username={props.username} timestamp={props.timestamp} addComment={props.addComment} />
  </article>
)

export default Post;
