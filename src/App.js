import React, { Component } from 'react';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import './App.css';

class App extends Component {
  state = {
    posts: dummyData
  }

  addComment = (username, text) => {
    this.setState(state => ({
      posts: state.posts.map(post =>
        post.username === username
          ? {...post, comments: [...post.comments, { username, text }]}
          : post
      )
    }));
  }

  render() {
    return (
      <div className="app-container">
        <SearchBar />
        <PostContainer posts={this.state.posts} addComment={this.addComment} />
      </div>
    );
  }
}

export default App;
