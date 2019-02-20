import React from 'react';

class LoginPage extends React.PureComponent {
  state = { username: '' }

  handleUserInput = (e) => {
    this.setState({ username: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.completeLogin(this.state.username);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required
            value={this.state.username} onChange={this.handleUserInput}
          />
        </div>
        <div>
          <label htmlFor="pass">Password:</label>
          <input type="password" id="pass" name="password" required />
        </div>
        <input type="submit" value="Sign in" />
      </form>
    )
  }
}

export default LoginPage;
