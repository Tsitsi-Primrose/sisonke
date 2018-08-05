import React, { Component } from 'react';
import './App.css';
import icon from './icon.png';
import Login from "./Login";
import Project from "./Project";
import New from "./New";
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
import deflt from './photo.jpg';

class DeskTop extends Component {
    state = {
        form: "none",
        my_new: "none",
        projects: [
            {type: "land-clear", province: "gating", area: "22 on Sloan", img: t0},
            {type: "land-clear", province: "gating", area: "78 Mayersdal", img: t1},
            {type: "land-clear", province: "gating", area: "5 Crest street", img: t2},
            {type: "land-clear", province: "gating", area: "100 lang avenue", img: t3},
            {type: "land-clear", province: "gating", area: "1 Prich street", img: t4},
            {type: "land-clear", province: "gating", area: "45 Surrey street", img: t5},
            {type: "land-clear", province: "gating", area: "90 Junc avenue", img: t6},
            {type: "land-clear", province: "gating", area: "18 Nlhapo section", img: t7},
            {type: "land-clear", province: "gating", area: "60 Melrose arch", img: t8},
            {type: "land-clear", province: "gating", area: "4 Dladla street", img: t9},
            {type: "land-clear", province: "gating", area: "22 Edenvale", img: t10},
            {type: "land-clear", province: "gating", area: "10 Yeoville", img: t11}
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
