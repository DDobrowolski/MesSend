import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './SignUp.scss';
import axios from 'axios';
import {Link} from 'react-router-dom'


export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', passwordConfirm: '' };
  }
  signUp = async () => {
    await axios.post(
      process.env.REACT_APP_API_URL + 'users',
      { ...this.state },
      { headers: {'Content-Type': 'application/json'} }
    );
  };
  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };
  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };
  handlePasswordConfirmationChange = event => {
    this.setState({ passwordConfirm: event.target.value });
  };
  render() {
    return (
      <div className="container">
        <div className="card text-center" style={{ width: '18rem' }}>
          <div className="card-header">{'Welcome!'}</div>
          <div className="card-body">
            <h5 className="card-title">Sign up:</h5>
            <form onSubmit={this.signUp}>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleEmailChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Repeat password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password-confirmation"
                  placeholder="Password"
                  value={this.state.confirmPassword}
                  onChange={this.handlePasswordConfirmationChange}
                />
              </div>
              <div class="signUpLabel">
                <label>Have an account? <Link to={`/`}>Sign in! </Link></label>
              </div>
              <button type="submit" className="btn btn-primary">
                Sign up!
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
