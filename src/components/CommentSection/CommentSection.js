import React from 'react';
import moment from 'moment';
import Comment from './Comment';
import uuidv4 from 'uuid/v4';
import './CommentSection.css'

class CommentSection extends React.PureComponent {
  state = { comment: '' }

  onChange = (e) => {
    this.setState({ comment: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addComment(this.props.username, this.state.comment)
    this.setState({ comment: '' });
  }

  render() {
    return (
      <div className="comment-section">
        <div className="comments">
          {this.props.comments.map((comment, index) => (
            <Comment {...comment} key={uuidv4()} index={index} postUsername={this.props.username} deleteComment={this.props.deleteComment} />
          ))}
        </div>
        <p>{moment(this.props.timestamp, 'MMMM D YYYY, LTS').fromNow()}</p>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Add a comment..." value={this.state.comment} onChange={this.onChange} />
          <i className="fas fa-ellipsis-h"></i>
        </form>
      </div>
    )
  }
}

export default CommentSection;
