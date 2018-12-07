import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from '../NavBar/Navbar';
import './Board.scss';
import axios from 'axios';
import {Link} from 'react-router-dom'

const content = (messages) => {
  console.log(messages)
  return (
<div className="container">
      {items(messages)}
  </div>)
}

const items = (messages) => {
  return messages.map(m => {
    const userId = m.author._id;
    return (
    <div className="post">
    <div className="row">
    <div className="col">
    {m.content} - <Link to={`profile/${userId}`}>{m.author.username}</Link>
    </div>
    </div>
    </div>
  )})
}

class Board extends Component {
  state = {messages: []}
  componentDidMount() {
    axios.get('http://localhost:8080/messages').then(res => {
        const messages = res.data;
        this.setState({messages: messages});
      });
    console.log(this.state)
  }
    render() {
      return ([new NavBar(), content(this.state.messages)]);
    }
  }
  export default Board;
  