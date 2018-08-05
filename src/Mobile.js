import React, { Component } from 'react';
import './App.css';
import Login from "./Login";
import icon from './icon.png';
import Project from "./Project";
import New from "./New";
import deflt from './photo.jpg';
import t0 from './Chennai pollution.jpg';
import t1 from './im7.jpg';
import t2 from './im8.jpg';
import t3 from './ad1.jpeg';
import t4 from './town.jpg';
import t5 from './images2.jpeg';
import t6 from './im13.jpeg';
import t7 from './im12.jpeg';
import t8 from './im9.jpg';
import t9 from './im10.jpg';
import t10 from './hurr.jpg';
import t11 from './farm.jpg';

class Mobile extends Component {
    state = {
        form: "none",
        my_new: "none",
        projects: [
            {type: "land-clear", province: "gating", area: "22 on Sloan", img: t0},
            {type: "land-clear", province: "gating", area: "22 on Sloan", img: t1},
            {type: "land-clear", province: "gating", area: "22 on Sloan", img: t2},
            {type: "land-clear", province: "gating", area: "22 on Sloan", img: t3},
            {type: "land-clear", province: "gating", area: "22 on Sloan", img: t4},
            {type: "land-clear", province: "gating", area: "22 on Sloan", img: t5},
            {type: "land-clear", province: "gating", area: "22 on Sloan", img: t6},
            {type: "land-clear", province: "gating", area: "22 on Sloan", img: t7},
            {type: "land-clear", province: "gating", area: "22 on Sloan", img: t8},
            {type: "land-clear", province: "gating", area: "22 on Sloan", img: t9},
            {type: "land-clear", province: "gating", area: "22 on Sloan", img: t10},
            {type: "land-clear", province: "gating", area: "22 on Sloan", img: t11}
        ],
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
            <div style={{textAlign: "center"}}>
                <button className="my-float" onClick={()=>{this.send("block", null)}}>Add</button>
                <div className="form" style={{display: this.state.form, padding: "auto"}}>
                    <Login clear={this.clear}/>
                </div>
                <div className="my-new" style={{display: this.state.my_new, padding: "auto"}}>
                    <New send={(my_state)=>{this.send("none",my_state)}}/>
                </div>
                <img src={this.state.user === "guest" ? icon : deflt} alt="icon" onClick={() => this.clear("block")} />
                <div>{this.state.user}</div>
                {this.state.projects.map((my_state, id) => ( <Project key={id} id={id%9} my_state={my_state} makePledge={this.props.makePledge}/> ))}
            </div>
        );
    }
}

export default Mobile;
