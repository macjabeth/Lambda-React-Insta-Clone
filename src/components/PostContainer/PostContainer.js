import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

const PostContainer = (props) => (
  <div className="posts">
    {props.posts.map((post, index) => (
      ((props.query && RegExp(props.query, 'i').test(post.username)) || !props.query)
        ? <Post {...post} key={index}
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
