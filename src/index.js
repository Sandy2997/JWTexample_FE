import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Login from './component/Login/login';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Register from './component/Register/register';

const routing = (
    <Router>
        <div>
        <Route exact path="/" component={Login} />
      <Route path="/register" component={Register} />

        </div>
        </Router>
)
    
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
