import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import './TextEditor.scss';

const addPost = async (author, content) => axios.post('http://localhost:8080/messages', {content, author});

export default class TextEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
      }

    handleChange = (event) =>{
        console.log(event.target)
        this.setState({value: event.target.value});
        }
    handleSubmit = async (event) => {
        await addPost('5c2e444113de272eb42c32aa', this.state.value);
        event.preventDefault();
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}><div className="form-group" id="postEditor">
            <input className="form-control" rows="3" placeholder="Write something..." value={this.state.value} onChange={this.handleChange}></input>
            </div></form>);
      }
}