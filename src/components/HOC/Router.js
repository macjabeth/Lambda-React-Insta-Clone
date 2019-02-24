import React from 'react';
import PostsPage from '../PostContainer/PostsPage';
import LoginPage from '../Login/LoginPage';

const withAuthentication = (conditionalRenderingFn, LoginPage) =>
  (PostsPage) => ({completeLogin, ...props}) => {
    return conditionalRenderingFn(props)
      ? <LoginPage completeLogin={completeLogin} />
      : <PostsPage { ...props } />
  }

const isNotLoggedInFn = (props) => props.username === '';

const Router = withAuthentication(isNotLoggedInFn, LoginPage)(PostsPage);

export default Router;
