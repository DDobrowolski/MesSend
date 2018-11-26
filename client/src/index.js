import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import Board from './Board/Board';
import * as serviceWorker from './serviceWorker';
import { Route } from 'react-router'
import {BrowserRouter} from 'react-router-dom';



ReactDOM.render((
    <BrowserRouter>
    <div>
      <Route exact path='/' component={App} />
      <Route path='/board' component={Board} />
    </div>
  </BrowserRouter>
  ), document.getElementById('root'));

serviceWorker.unregister();
