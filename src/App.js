import React, { Component } from 'react';
import './App.css';
import Mobile from "./Mobile";
import DeskTop from "./DeskTop";
import town from "./town.jpg";
import house from "./0.png";
import Stories from "./Stories";

class App extends Component {
    state = {
        width: 0,
        tab: 0,
        pledging: "none",
        count: 0
    };

    switchTab = (val) => {
        this.setState({
            tab: val
        });
    };

    makePledge = (val) =>  {
        // TODO show pledge if count % 2 == 0, else show progress
        this.setState({
            pledging: val,
            count: this.state.count + 1
        })
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
    };

    componentWillUnmount() {
        let me = this;
        window.removeEventListener('resize', me.updateWind);
    };

    render() {
        let body = this.state.tab === 0 ? (this.state.width < 800 ? <Mobile makePledge={() => {this.makePledge("block")}} /> : <DeskTop makePledge={() => {this.makePledge("block")}} />) : <Stories/>;
        return (
            <div className="App">
                <div className="form" style={{display: this.state.pledging, padding: "auto"}}>
                    <div onClick={this.clear}>
                        Click Me!!!!!!!!!!
                        <button onClick={() => {this.makePledge("none")}}>Cancel or Send</button>
                    </div>
                </div>
                <div className="header" style={{backgroundImage: "url("+town+")"}} >GrahamsTown Community</div>
                <ul>
                    <li><a className="active" onClick={()=>{this.switchTab(0)}}><img src={house} alt="" height={20} width="auto"/><span className="no-icon">Home</span></a></li>
                    <li><a  onClick={()=>{this.switchTab(1)}}><img src={house} alt="" height={20} width="auto"/><span className="no-icon">News</span></a></li>
                </ul>
                {body}
            </div>
        );
    }
}

export default App;
