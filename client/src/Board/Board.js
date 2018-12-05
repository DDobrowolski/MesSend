import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from '../NavBar/Navbar';
import './Board.scss';
import axios from 'axios';

const content = (messages) => {
  console.log(messages)
  return (
<div className="container">
      {items(messages)}
  </div>)
}

const items = (messages) => {
  return messages.map(m => {
    return (
    <div className="post">
    <div className="row">
    <div className="col">
    {m.content} - {m.author.username}
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
  