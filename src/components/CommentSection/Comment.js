import React from 'react';

const Comment = (props) => (
  <p onClick={() => props.deleteComment(props.postUsername, props.index)}>
    <strong>{props.username}</strong> {props.text}
  </p>
);

export default Comment;
