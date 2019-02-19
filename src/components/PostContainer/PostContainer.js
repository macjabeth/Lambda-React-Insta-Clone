import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

const PostContainer = (props) => (
  <div className="posts">
    {props.posts.map((post, index) => (
      <Post {...post} key={index} />
    ))}
  </div>
)

PostContainer.propTypes = {
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
