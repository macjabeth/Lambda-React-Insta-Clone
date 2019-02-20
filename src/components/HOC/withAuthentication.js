import React from 'react';

const withAuthentication = (conditionalRenderingFn, LoginPage) =>
  (PostsPage) => ({completeLogin, ...props}) => {
    return conditionalRenderingFn(props)
      ? <LoginPage completeLogin={completeLogin} />
      : <PostsPage { ...props } />
  }

export default withAuthentication;
