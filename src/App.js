import React, { Component } from 'react';
import SimpleStorage from 'react-simple-storage';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';
import './App.css';

class App extends Component {
  state = {
    posts: dummyData,
    query: ''
  }

  // componentDidMount being used by SimpleStorage to load from localStorage

  addComment = (username, text) => {
    this.setState(state => ({
      posts: state.posts.map(post =>
        post.username === username
          ? {...post, comments: [...post.comments, { username, text }]}
          : post
      )
    }));
  }

  giveHeart = (username) => {
    this.setState(state => ({
      posts: state.posts.map(post =>
        post.username === username
          ? {...post, likes: ++post.likes}
          : post
      )
    }));
  }

  filterPosts = (e) => {
    this.setState({ query: e.target.value });
  }

  render() {
    return (
      <React.Fragment>
        <SimpleStorage parent={this} />
        <div className="app-container">
          <SearchBar filterPosts={this.filterPosts} />
          {this.state.posts.length
            ? <PostContainer
                posts={this.state.posts}
                query={this.state.query}
                addComment={this.addComment}
                giveHeart={this.giveHeart} />
            : <p>Loading...</p>}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
