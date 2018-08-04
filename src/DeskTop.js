import React, { Component } from 'react';
import './App.css';
import icon from './icon.png';
import Login from "./Login";
import Project from "./Project";
import New from "./New";

class DeskTop extends Component {
    state = {
        form: "none",
        my_new: "none",
        projects: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    };

    clear = (st) => {
        this.setState(
            {
                form: st
            }
        );
    };

    send = (st) => {
        this.setState(
            {
                my_new: st
            }
        );
    };

    render() {
        return (
            <div>
                <div className="form" style={{display: this.state.form, padding: "auto"}}>
                    <Login clear={this.clear}/>
                </div>
                <div className="my-new" style={{display: this.state.my_new, padding: "auto"}}>
                    <New send={()=>{this.send("none")}}/>
                </div>
                <table><tbody><tr>
                    <td className="side-pane"><div className="side-pane">
                        <img src={icon} alt="icon" onClick={() => this.clear("block")}/>
                        <button className="my-norm" onClick={()=>{this.send("block")}}>Add</button>
                    </div></td>
                    <td><div className="main-pane">
                        {this.state.projects.map((id) => ( <Project key={id} id={id%9} /> ))}
                    </div></td>
                </tr></tbody></table>
            </div>
        );
    }
}

export default DeskTop;
