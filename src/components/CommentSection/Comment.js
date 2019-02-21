import React from 'react';

const Comment = (props) => (
  <p>
    <strong>{props.username}</strong> {props.text}
  </p>
);

export default Comment;
