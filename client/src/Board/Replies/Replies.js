import React, { Component } from 'react';
import {item} from '../Board';
import axios from 'axios';


const content = (message) => {
    return (
  <div className="container">
        {item(message)}
    </div>)
  }

class Replies extends Component {
    
constructor(props){
    super(props);
    this.state = {message: {}}
}

componentDidMount() {
    const messageId = this.props.match.params.messageId;
    axios.get(`http://localhost:8080/messages/${this.props.messageId}`).then(res => {
        const message = res.data;
        this.setState({message});
      });
  }

render(){
    //return content(this.state.message);
    return <div></div>
}


}
export default Replies;