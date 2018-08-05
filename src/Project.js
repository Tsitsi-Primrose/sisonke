import React, { Component } from 'react';
import './App.css';
import fb from './fb1.png';
import pin from './pin.png';
import twt from './twitter.png';
import pf from './Full.png';
import p7 from './7.png';
import p6 from './6.png';
import p5 from './5.png';
import p4 from './4.png';
import p3 from './3.png';
import p2 from './2.png';
import p1 from './1.png';
import p0 from './0.png';

class Project extends Component {
    status = [p0, p1, p2, p3, p4, p5, p6, p7, pf];

    my_state;
    makePledge;
    render() {
        return (
            <div className="project" onClick={this.props.makePledge}>
                <table>
                    <tbody><tr>
                        <td colSpan="3">
                            <img src={this.props.my_state.img} alt="" height={170} width={175} />
                            <div>
                                <img src={fb} alt="" height={50} width={50} />
                                <img src={pin} alt="" height={50} width={50} />
                                <img src={twt} alt="" height={50} width={50} />
                            </div>
                        </td>
                        <td style={{textAlign: "center"}}>
                            <p>Type:{this.props.my_state.type}</p>
                            <p>Province:{this.props.my_state.province}</p>
                            <p>Area:{this.props.my_state.area}</p>
                            <div><img src={this.status[this.props.id]} alt="" height={110} width={110}/></div>
                        </td>
                    </tr></tbody>
                </table>
            </div>
        );
    }
}

export default Project;