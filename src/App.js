import React, { Component } from 'react';
import './App.css';
import Mobile from "./Mobile";
import DeskTop from "./DeskTop";
import town from "./town.jpg";
import house from "./0.png";
import Stories from "./Stories";
import full from "./FullName.png";
import hour from "./hour.svg";
import horn from "./horn.svg";

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
                    <div onClick={this.clear} className="form">
                        <div style={{backgroundColor: "white"}}>
                            Project Description: This project aims to clean up the region on corner 22 on Sloan and Junction Avenue on
                            the Jukskei river bank to create a recreational park. To do so the following funds and resources are required:
                            <table style={{fontFamily: "arial, sans-serif", borderCollapse: "collapse", width: "40%"}}> <tbody>
                                <tr> <td>Total funding:</td> <td>R 16 500</td> </tr>
                                <tr> <td>Bins</td> <td>R 1000 </td> </tr>
                                <tr> <td>Benches</td> <td>R 5000</td> </tr>
                                <tr> <td>Playground sets</td> <td>R 7000</td> </tr>
                                <tr> <td>Land Maintenance tools</td> <td>R 3 400</td> </tr>
                                <tr> <td>Garbage bags</td> <td>R 100</td> </tr>
                                <tr> <td>Volunteers</td> <td>R 0 </td> </tr>
                            </tbody></table> <h2>Payment Options</h2>
                            <form >
                                <h3>Card payment:</h3>
                                Card holder name<br /> <input type="text" name="firstName" value="Mickey" /> <br />
                                Card number<br /> <input type="text" name="lastName" value="Mouse" /> <br />
                                CCV Number <br /> <input type="text" name="lastName" value="Mouse" /> <br /><br />
                                <h3>Banking details:</h3>
                                <table><tbody>
                                    <tr> <td>Bank Name:</td> <td>Absa</td> </tr>
                                    <tr> <td>Account number:</td> <td>42015345489</td> </tr>
                                    <tr> <td>Type of account:</td> <td>Current</td> </tr>
                                    <tr> <td>Branch:</td> <td>Alberton</td> </tr>
                                    <tr> <td>Reference:</td> <td>Please fill in your surname, initials and telephone</td> </tr>
                                </tbody></table>
                            </form>
                            <button onClick={() => {this.makePledge("none")}}>Pledge</button>
                        </div>
                    </div>
                </div>
                <div className="header" style={{backgroundImage: "url("+town+")"}} ><img src={full} alt="" height={50} /><br/>The Vaal Community</div>
                <ul>
                    <li><a className="active" onClick={()=>{this.switchTab(0)}}><img src={horn} alt="" height={20} width="auto"/> &nbsp; <span className="no-icon">Your Story</span></a></li>
                    <li><a  onClick={()=>{this.switchTab(1)}}><img src={hour} alt="" height={20} width="auto"/> &nbsp; <span className="no-icon">In Progress</span></a></li>
                </ul>
                {body}
            </div>
        );
    }
}

export default App;
