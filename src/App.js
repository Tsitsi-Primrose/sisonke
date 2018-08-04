import React, { Component } from 'react';
import './App.css';
import Mobile from "./Mobile";
import DeskTop from "./DeskTop";

class App extends Component {
    state = {
        width: 0
    };

    updateWind = () => {
        this.setState(
            {
                width: window.innerWidth
            }
        );
    };

    componentDidMount() {
        let me = this;
        me.updateWind();
        window.addEventListener('resize', me.updateWind);
    }

    componentWillUnmount() {
        let me = this;
        window.removeEventListener('resize', me.updateWind);
    }

    render() {
        let body = this.state.width < 800 ? <Mobile /> : <DeskTop/>;
        return (
            <div className="App">
                {body}
            </div>
        );
    }
}

export default App;
