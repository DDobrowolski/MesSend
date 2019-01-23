import React, { Component } from 'react';
import axios from 'axios';
import {item} from '../Board';


const content = (message) => {
    return (
  <div className="container">
        {item(message, false)}
    </div>)
  }

const replyElement = (reply) => {
    return (
    <div>
        {item(reply, false)}
    </div>
    )
}
class Replies extends Component {

constructor(props){
    super(props);
    this.state = {message: {}}
    console.log('test')
}

componentDidMount() {
    const messageId = this.props.match.params.messageId;
    console.log(messageId)
    axios.get(`http://localhost:8080/messages/${messageId}`).then(res => {
        const message = res.data;
        this.setState({message});
        console.log(this.state.message)
      });
  }

render(){
    if(this.state.message.author)
    return content(this.state.message);
    else return <div></div>
}


}
export default Replies;