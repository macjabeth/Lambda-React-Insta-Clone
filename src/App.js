import React, { Component } from 'react';
import SimpleStorage from 'react-simple-storage';
import PostsPage from './components/PostContainer/PostsPage';
import LoginPage from './components/Login/LoginPage';
import withAuthentication from './components/HOC/withAuthentication';
import dummyData from './dummy-data';
import './App.css';

const isNotLoggedInFn = (props) => props.username === '';
const AppWithConditionalRendering = withAuthentication(isNotLoggedInFn, LoginPage)(PostsPage);

class App extends Component {
  state = {
    username: '',
    posts: dummyData,
    query: ''
  }

  // componentDidMount being used by SimpleStorage to load from localStorage

  completeLogin = (username) => {
    this.setState({ username });
  }

  logout = () => {
    this.setState({ username: '' });
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

  deleteComment = (username, index) => {
    this.setState(state => ({
      posts: state.posts.map(post =>
        post.username === username
          ? {...post, comments: post.comments.filter((comment, i) => i !== index)}
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
          <AppWithConditionalRendering
            { ...this.state }
            completeLogin={this.completeLogin}
            logout={this.logout}
            filterPosts={this.filterPosts}
            giveHeart={this.giveHeart}
            addComment={this.addComment}
            deleteComment={this.deleteComment}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
