import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from '../NavBar/Navbar';
import './Profile.scss';
import axios from 'axios';

const getUserData = (id) => {
  return axios.get(`http://localhost:8080/users/${id}`).then(res => res.data.username);
  
}

class Profile extends Component {
  state = {userdata: {}}
  componentDidMount() {
  getUserData(this.props.match.params.id).then(data => {
    this.setState({userdata: {username: data}});
    console.log(data)
  })
   
  }

    render() {
      return ([new NavBar(), <div>{this.state.userdata.username}</div>]);
    }
  }
  export default Profile;
  