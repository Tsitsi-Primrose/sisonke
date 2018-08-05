import React, { Component } from 'react';
import './App.css';
//import img0 from "./0.png";

class Stories extends Component {
    story = [
        {img: "", details: "", comments: "More than 100 volunteers from the Vaal area and supermarkets cleaned up one of the largest"},
    ];
    render() {
        return (
            <div className="login">
                {this.story.map((data) => (
                    <div>
                        <img src={data.img}/><br />
                        <div>Details: {data.details}</div>
                        <div>Comments: {data.comments}</div>
                    </div>
                 ))}
            </div>
        );
    }
}

export default Stories;
