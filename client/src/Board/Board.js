import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from '../NavBar/Navbar';
import './Board.scss';

const content = (
  <div class="container">
<div class="post">
<div class="row">
<div class="col">
  One of three columns
  </div>
  </div>
  </div>
</div>)

class Board extends Component {
    render() {
      return ([new NavBar(), content]);
    }
  }
  export default Board;
  