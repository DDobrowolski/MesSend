import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from '../NavBar/Navbar';
import './Board.scss';
import axios from 'axios';
import {Link} from 'react-router-dom'
import TextEditor from './TextEditor/TextEditor.js';

export const content = (messages) => {
  return (
<div className="container">
      {items(messages, true)}
  </div>)
}

export const item = (message, replies) => {
    const userId = message.author._id;
    const imageSrc = process.env.REACT_APP_API_URL+message.author.image;
    const username = message.author.username;
    return (
    <div className="post" key={message._id}>
      <div className="row">
        <div className="col">
          <div className ="profileImg">
          <Link to={`profile/${userId}`}><img src={imageSrc} alt={username}></img></Link>
          </div>
          <div className="postContentContainer">
          <div className="postContent">
          {message.content} - <Link to={`profile/${userId}`}>{message.author.username}</Link>
          </div>
          </div>
        </div>
      </div>
    {replies ? <span><Link to={`posts/${message._id}/replies`}>{message.replies.length} replies</Link></span> : ''}
    </div>
  )}

// TODO link to replies
const items = (messages, replies) => {
  return messages.map((m => item(m, replies)))
}

const mainContent = (messages) => (<div className="mainContainer"><TextEditor/>{content(messages)}</div>)

class Board extends Component {
  constructor(props){
    super(props);
    this.state = {messages: []}

  }
  componentDidMount() {
    axios.get(process.env.REACT_APP_API_URL+'messages').then(res => {
        const messages = res.data;
        this.setState({messages});
      });
  }
    render() {
      return ([new NavBar(),mainContent(this.state.messages)]);
    }
  }
  export default Board;
  