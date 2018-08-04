import React, { Component } from 'react';
import './App.css';

class Login extends Component {
    render() {
        return (
            <div className="login">
                Login Here <br />
                Name: .....................<br/>
                Password: .................<br/>
                <button onClick={() => this.props.clear("none")}>Cancel</button>
            </div>
        );
    }
}

export default Login;
