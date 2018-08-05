import React, { Component } from 'react';
import './App.css';

class Login extends Component {
    render() {
        return (
            <div className="login">
                Login Here <br />
                Username: <input type="text" /><br/>
                Password: <input type="password" /><br/>
                <button onClick={() => this.props.clear("none")}>Login</button>
            </div>
        );
    }
}

export default Login;
