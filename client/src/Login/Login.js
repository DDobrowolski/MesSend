import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Login.scss';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import AuthService from '../Services/AuthService';

export default class Login extends Component {
  remember = false;
  actualUser = 'Test user';

  async logIn() {
    const cookies = new Cookies();
    const token = cookies.get('token');
    const tokenValid = await AuthService.checkToken(token);
    console.log(tokenValid);
    if(tokenValid){
      console.log('valid');
      return;
    }
    console.log('invalid');
  }

  loginForms = (
    <form onSubmit={this.logIn}>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        {!this.remember && (
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Email"
          />
        )}
        {this.remember && (
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder={this.actualUser}
            readOnly
          />
        )}
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
        />
      </div>
      <div className="form-check">
        <input type="checkbox" className="form-check-input" />
        <label className="remember-me" htmlFor="rememberMe">
          Remember me
        </label>
      </div>
      <div className="signUpLabel">
        <label>
          Don't have an account? <Link to={`signup`}>Sign up! </Link>
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Sign in!
      </button>
    </form>
  );

  loginCard = (
    <div className="card text-center" style={{ width: '18rem' }}>
      <div className="card-header">
        {!this.remember && 'Welcome!'}{' '}
        {this.remember && `Welcome back ${this.actualUser}`}
      </div>
      <div className="card-body">
        <h5 className="card-title">Please log in:</h5>
        {this.loginForms}
      </div>
    </div>
  );
  content = <div className="container">{this.loginCard}</div>;

  render() {
    return this.content;
  }
}
