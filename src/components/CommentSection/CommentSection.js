import React from 'react';
import moment from 'moment';
import Comment from './Comment';
import './CommentSection.css'

const CommentSection = (props) => (
  <div className="comment-section">
    <div className="comments">
      {props.comments.map((comment, index) => (
        <Comment {...comment} key={index} />
      ))}
    </div>
    <p>{moment(props.timestamp, 'MMMM D YYYY, LTS').fromNow()}</p>
    <form>
      <input type="text" placeholder="Add a comment..." />
      <i className="fas fa-ellipsis-h"></i>
    </form>
  </div>
)

export default CommentSection;
