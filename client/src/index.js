import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import Board from './Board/Board';
import * as serviceWorker from './serviceWorker';
import { Route } from 'react-router'
import {BrowserRouter} from 'react-router-dom';
import Profile from './Profile/Profile';
import Replies from './Board/Replies/Replies';



ReactDOM.render((
    <BrowserRouter>
    <div>
      <Route exact path='/' component={App} />
      <Route path='/board' component={Board} />
      <Route exact path = '/profile/:id' component={Profile} />
      <Route exact path = '/posts/:messageId/replies' component={Replies} />
    </div>
  </BrowserRouter>
  ), document.getElementById('root'));

serviceWorker.unregister();
