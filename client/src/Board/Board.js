import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from '../NavBar/Navbar';
import './Board.scss';
import axios from 'axios';
import {Link} from 'react-router-dom'
import TextEditor from './TextEditor/TextEditor.js';

const content = (messages) => {
  return (
<div className="container">
      {items(messages)}
  </div>)
}

// TODO link to replies
const items = (messages) => {
  return messages.map(m => {
    const userId = m.author._id;
    const imageSrc = `http://localhost:8080/${m.author.image}`;
    const username = m.author.username;
    return (
    <div className="post">
    <div className="row">
    <div className="col">
    <div className ="profileImg">
    <Link to={`profile/${userId}`}><img src={imageSrc} alt={username}></img></Link>
    </div>
    <div className="postContent">
    {m.content} - <Link to={`profile/${userId}`}>{m.author.username}</Link>
    </div>
    </div>
    </div>
    <span><Link to="#">{m.replies.length} replies</Link></span>
    </div>
  )})
}

const mainContent = (messages) => (<div className="mainContainer"><TextEditor/>{content(messages)}</div>)

class Board extends Component {
  state = {messages: []}
  componentDidMount() {
    axios.get('http://localhost:8080/messages').then(res => {
        const messages = res.data;
        this.setState({messages: messages});
      });
  }
    render() {
      return ([new NavBar(),mainContent(this.state.messages)]);
    }
  }
  export default Board;
  