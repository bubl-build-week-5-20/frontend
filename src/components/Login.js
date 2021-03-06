import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import './Login.css'
import { login } from '../actions';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    this.props.login(this.state.credentials)
    .then(() => {
      this.props.history.push('/posts');
    });
  };

  render() {
    return (
      <React.Fragment>
      <div className="bgLogin"></div>
      <div className="loginPage">
        <div className="loginHeader"><h2>Please Log in</h2></div>
        <form className="loginForm" onSubmit={this.login}>
          <input
          placeholder="username"
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            placeholder="password"
            type="text"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>
            {this.props.isLoggingIn ? (
              <Loader type="ThreeDots" color="#2fb8be" height="12" width="26" />
            ) : (
                'Log in'
              )}
          </button>
        </form>
        <Link to="/signup"><p className="redirectSignup">Don't have an account yet? Click Here!</p></Link>
      </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isLoggingIn: state.isLoggingIn
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
