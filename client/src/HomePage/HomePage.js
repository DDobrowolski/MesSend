import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './HomePage.scss';
import userImage from './img/iconfinder_user-group_285648.png';
export default class HomePage extends Component {
  loginForms = (
    <form>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
    </div>
    <div class="form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
      <label class="remember-me" for="exampleCheck1">Remember me</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  )

  loginCard = (
    <div class="card text-center" style = {{width: "18rem"}}>
    <div class="card-header">
    Welcome!
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
