import React, { Component } from 'react';
import './App.css';
import ReactFileReader from 'react-file-reader';
class New extends Component {
    state = {
        type: "land-clear",
        province: "gating",
        area: "22 on Sloan",
        img: ""
    };

    handleFiles = (files) => {
        let f = files[0];
        let reader = new FileReader();
        let mt = this;
        reader.onload = (function() {
            return function (e) {
                let img = e.target.result;
                mt.setState(
                    {
                        img: img
                    }
                )
            };
        })(f);
        reader.readAsDataURL(f);
    };

    handleChange = (e, st) => {
        if(st === "type") {
            this.setState(
                {
                    type: e.target.value
                }
            );
        }
        else if(st === "province") {
            this.setState(
                {
                    province: e.target.value
                }
            );
        }
        else if(st === "area") {
            this.setState(
                {
                    area: e.target.value
                }
            );
        }
    };

    render() {
        return (
            <div className="login">
                Type Of Project:<br/>
                <input type="text" value={this.state.type} onChange={(e) => this.handleChange(e, "type")} /> <br/> Province: <br/>
                <input type="text" value={this.state.province} onChange={(e) => this.handleChange(e, "province")} /> <br/> Area: <br/>
                <input type="text" value={this.state.area} onChange={(e) => this.handleChange(e, "area")} /> <br/>
                <ReactFileReader handleFiles={(e) => this.handleFiles(e)} fileTypes="image/*" multipleFiles={false} >
                    <button className="secondary-button" style={{right: 0, float: "right"}} >Upload Document</button>
                </ReactFileReader>
                {this.state.img === "" ? "" : <img src={this.state.img} alt="" height={50} width="auto" />}
                <button onClick={()=>this.props.send(this.state)}>Submit</button>
            </div>
        );
    }
}

export default New;
