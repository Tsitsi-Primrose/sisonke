import React, { Component } from 'react';
import './App.css';
import Login from "./Login";
import icon from './icon.png';
import Project from "./Project";
import New from "./New";
import dog from './dog.jpeg';

class Mobile extends Component {
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
        ]
    };

    clear = (st) => {
        this.setState(
            {
                form: st
            }
        );
    };

    send = (st, my_state) => {
        this.setState(
            {
                my_new: st,
                projects: [...this.state.projects, this.state.projects.size]
            }
        );
    };

    render() {
        return (
            <div>
                <button className="my-float" onClick={()=>{this.send("block")}}>Add</button>
                <div className="form" style={{display: this.state.form, padding: "auto"}}>
                    <Login clear={this.clear}/>
                </div>
                <div className="my-new" style={{display: this.state.my_new, padding: "auto"}}>
                    <New send={()=>{this.send("none")}}/>
                </div>
                <img src={icon} alt="icon" onClick={() => this.clear("block")} />
                {this.state.projects.map((my_state, id) => ( <Project key={id} id={id%9} my_state={my_state}/> ))}
            </div>
        );
    }
}

export default Mobile;
