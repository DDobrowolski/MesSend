import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from '../NavBar/Navbar';
import './Profile.scss';
import axios from 'axios';

const getUserData = (id) => {
  const username = axios.get(`http://localhost:8080/users/${id}`).then(res =>  res.data.username);

}

class Profile extends Component {
  state = {messages: []}
  componentDidMount() {
  }

    render() {
      return ([new NavBar()]);
    }
  }
  export default Profile;
  