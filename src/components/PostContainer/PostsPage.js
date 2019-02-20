import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';

const PostsPage = (props) => (
  <React.Fragment>
    <SearchBar filterPosts={props.filterPosts} />
    {props.posts.length
      ? <PostContainer
          posts={props.posts}
          query={props.query}
          addComment={props.addComment}
          deleteComment={props.deleteComment}
          giveHeart={props.giveHeart} />
      : <p>Loading...</p>}
  </React.Fragment>
)

export default PostsPage;
