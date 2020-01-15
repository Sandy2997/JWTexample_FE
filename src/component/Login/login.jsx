import React, { Component } from 'react';
import './login.css';
import { Link } from 'react-router-dom';

class Login extends Component {
    //state = {  }
    render() { 
        return ( 
            <div className="Bg-image">
            <div><h1>Login</h1></div>
            <input type="text"/>
            <input type="text"/>
            <div></div>
            <button type="submit">Submit</button>
            <div>
                <Link to="/register">Click here to register</Link>
            </div>
            </div>
         );
    }
}
 
export default Login;