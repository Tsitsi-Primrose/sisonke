import React, { Component } from 'react';
import './App.css';
import icon from './icon.png';
import Login from "./Login";
import Project from "./Project";
import New from "./New";
import dog from './dog.jpeg';
import deflt from './photo.jpg';

class DeskTop extends Component {
    state = {
        form: "none",
        my_new: "none",
        projects: [
            {type: "land-clear", province: "gating", area: "22 on Sloan", img: dog},
            {type: "land-clear", province: "gating", area: "22 on Sloan", img: dog},
            {type: "land-clear", province: "gating", area: "22 on Sloan", img: dog},
            {type: "land-clear", province: "gating", area: "22 on Sloan", img: dog},
            {type: "land-clear", province: "gating", area: "22 on Sloan", img: dog},
            {type: "land-clear", province: "gating", area: "22 on Sloan", img: dog},
            {type: "land-clear", province: "gating", area: "22 on Sloan", img: dog},
            {type: "land-clear", province: "gating", area: "22 on Sloan", img: dog},
            {type: "land-clear", province: "gating", area: "22 on Sloan", img: dog},
            {type: "land-clear", province: "gating", area: "22 on Sloan", img: dog},
            {type: "land-clear", province: "gating", area: "22 on Sloan", img: dog},
            {type: "land-clear", province: "gating", area: "22 on Sloan", img: dog}
        ], // TODO copy from mobile
        user: "guest"
    };

    clear = (st) => {
        let name = "guest";
        if(st === "none")
            name = "Primrose";
        this.setState(
            {
                form: st,
                user: name
            }
        );
    };

    send = (st, my_state) => {
        let nw = this.state.projects;
        if(my_state !== null)
            nw = [my_state,...this.state.projects];
        if((my_state !== null && my_state.img !== "") || st === "block") {
            this.setState(
                {
                    my_new: st,
                    projects: nw
                }
            );
        }
    };

    render() {
        return (
            <div>
                <div className="form" style={{display: this.state.form, padding: "auto"}}>
                    <Login clear={this.clear}/>
                </div>
                <div className="my-new" style={{display: this.state.my_new, padding: "auto"}}>
                    <New send={(my_state)=>{this.send("none",my_state)}}/>
                </div>
                <table><tbody><tr>
                    <td className="side-pane"><div className="side-pane">
                        <img src={this.state.user === "guest" ? icon : deflt} alt="icon" onClick={() => this.clear("block")}/>
                        <div>{this.state.user}</div>
                        <button className="my-norm" onClick={()=>{this.send("block",null)}}>Add</button>
                    </div></td>
                    <td><div className="main-pane">
                        {this.state.projects.map((my_state, id) => ( <Project key={id} id={id%9} my_state={my_state} makePledge={this.props.makePledge}/> ))}
                    </div></td>
                </tr></tbody></table>
            </div>
        );
    }
}

export default DeskTop;
