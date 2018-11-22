import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './HomePage.scss';
import userImage from './img/iconfinder_user-group_285648.png';
export default class HomePage extends Component {
  remember = false;
  actualUser = 'Test user';
  logIn() {
    alert('Elo')
  }
  loginForms = (
    <form onSubmit={this.logIn}>
    <div class="form-group">
      <label for="email">Email address</label>
      {!this.remember &&<input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>}
      {this.remember && <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder={this.actualUser} readOnly/>}
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input type="password" class="form-control" id="password" placeholder="Password"/>
    </div>
    <div class="form-check">
      <input type="checkbox" class="form-check-input" />
      <label class="remember-me" for="rememberMe">Remember me</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  )

  loginCard = (
    <div class="card text-center" style = {{width: "18rem"}}>
    <div class="card-header">
    {!this.remember && 'Welcome!'} {this.remember && `Welcome back ${this.actualUser}`}
    </div>
    <img class="card-img-top" src={userImage} alt="User"/>
    <div class="card-body">
    <h5 class="card-title">Please log in:</h5>
    {this.loginForms}
  </div>
    </div>
  )
  content = (<div class="container" >{this.loginCard}</div>)

  render() {
    return this.content;
  }
}
