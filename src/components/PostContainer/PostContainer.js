import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';

const PostContainer = (props) => (
  <div className="posts">
    {props.posts.map(post => (
      ((props.query && RegExp(props.query.split('').join('.*?'), 'i').test(post.username)) || !props.query)
        ? <Post {...post} key={uuidv4()}
          addComment={props.addComment}
          deleteComment={props.deleteComment}
          giveHeart={props.giveHeart} />
        : null
    ))}
  </div>
)

PostContainer.propTypes = {
  addComment: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired,
  giveHeart: PropTypes.func.isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string
    }))
  }))
}

export default PostContainer;
