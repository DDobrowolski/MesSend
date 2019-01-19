import React, { Component } from 'react';
import axios from 'axios';
import {item} from '../Board';


class Replies extends Component {

    content = (message) => {
        return (
      <div className="container">
            {item(message)}
        </div>)
      }
    
constructor(props){
    super(props);
    this.state = {message: {}}
}

componentDidMount() {
    const messageId = this.props.match.params.messageId;
    axios.get(`http://localhost:8080/messages/${messageId}`).then(res => {
        const message = res.data;
        this.setState({message});
        console.log(this.state.message)
      });
  }

render(){
    return this.content(this.state.message);
}


}
export default Replies;