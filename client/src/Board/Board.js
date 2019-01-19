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

export const item = message => {
    const userId = message.author._id;
    const imageSrc = `http://localhost:8080/${message.author.image}`;
    const username = message.author.username;
    return (
    <div className="post">
    <div className="row">
    <div className="col">
    <div className ="profileImg">
    <Link to={`profile/${userId}`}><img src={imageSrc} alt={username}></img></Link>
    </div>
    <div className="postContent">
    {message.content} - <Link to={`profile/${userId}`}>{message.author.username}</Link>
    </div>
    </div>
    </div>
    <span><Link to={`posts/${message._id}/replies`}>{message.replies.length} replies</Link></span>
    </div>
  )}

// TODO link to replies
const items = (messages) => {
  return messages.map((m => item(m)))
}

const mainContent = (messages) => (<div className="mainContainer"><TextEditor/>{content(messages)}</div>)

class Board extends Component {
  state = {messages: []}
  componentDidMount() {
    axios.get('http://localhost:8080/messages').then(res => {
        const messages = res.data;
        this.setState({messages});
      });
  }
    render() {
      return ([new NavBar(),mainContent(this.state.messages)]);
    }
  }
  export default Board;
  