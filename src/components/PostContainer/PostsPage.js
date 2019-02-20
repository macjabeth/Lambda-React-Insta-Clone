import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';

const PostsPage = (props) => (
  <React.Fragment>
    <SearchBar filterPosts={props.filterPosts} logout={props.logout} />
    <PostContainer
      posts={props.posts}
      query={props.query}
      addComment={props.addComment}
      deleteComment={props.deleteComment}
      giveHeart={props.giveHeart} />
  </React.Fragment>
)

export default PostsPage;
