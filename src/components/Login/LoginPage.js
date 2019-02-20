import React from 'react';
import './Login.css';

class LoginPage extends React.PureComponent {
  state = { username: '' }

  handleUserInput = (e) => {
    this.setState({ username: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.refs.login.classList.add('fade-out');
    setTimeout(() => {
      this.props.completeLogin(this.state.username);
    }, 1000)
  }

  render() {
    return (
      <div className="login" ref="login">
        <h1>Instagram</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.username} onChange={this.handleUserInput} placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <input type="submit" value="Login" />
        </form>
      </div>
    )
  }
}

export default LoginPage;
