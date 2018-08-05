import React, { Component } from 'react';
import './App.css';
import img1 from "./im1.jpg";
import img2 from "./im4.jpeg"
import img3 from "./im3.jpeg"

class Stories extends Component {
    story = [
        {type: "Dump-site clearing", province: "Gauteng", area: "Meyerton", Duration: "2 days", AmountRaised: "R300",img: img2, comments: "More than 100 volunteers from the Vaal area and supermarkets cleaned up one of the largest dumping sites in the province. This was with the help of some money donations that allowed for the purchasing of cleaning materials. This helped to reduce air-borne diseases and other potential illnesses that result from dirty environments. Together we can!!!"},
        {type: "River bank cleaning", province: "Gauteng", area: "22onSloane", Duration: "2 days", AmountRaised: "R300",img: img1,  comments: "The 'clean the river project' was an effort to clean the river bend. It required cleaning materials and human power. Inorder to make it possible, we needed R500, which we were able to raise in 3 days inorder to be able to pay the people that worked on it. It went very well and now people are able to enjoy the view besides the river again. Together we can!!!"},
        {type: "Recreating a Park", province: "Gauteng", area: "Braamfontein",Duration: "1 month", AmountRaised:"R100000",img: img3, comments:" One of our biggest successes thus far is when the community decided that they were going to recreate their community park. They came together, contributed money to get professional gardeners and all other resources that were needed. Today this is one of the most popular parks that even self maintains itself through events that are held there. This is an amazing initiative that has created a bonding space for the community as well as provide employment for the people that work there. Again this shows that together we can!!!"}

    ];
    render() {
        return (
            <div style={{padding: 10}}>
                <p>Cleaner air, cleaner water and cleaner-land are the major successes of the Sisonke initiation.
                    After the beginning of this, the environment and the communities have been significantly improved in
                    many ways from the condition they were in on the first day that the programme was started. Promotion of
                    community based environmental action for a cleaner and healthier world by cleaning up garbage and refuse.
                    This achieves the reduction of garbage in public areas leading to increased health, sanitation and safety
                    standards and increased awareness to waste minimization and recycling. It allows for community involvement
                    including schools, media and local organizations. This is due to the realization that small community campaigns
                    have grown into national efforts. Let's start with the success stories of this initiative. </p>
                {this.story.map((data) => (
                    <div style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", margin: 20, padding: 20}}>
                        <img src={data.img} alt="" width="100%" /><br />
                        <div>type: {data.type}</div>
                        <div>province: {data.province}</div>
                        <div>area: {data.area}</div>
                        <div>Duration: {data.Duration}</div>
                        <div>AmountRaised: {data.AmountRaised}</div>
                        <div>Comments: {data.comments}</div>
                    </div>
                 ))}
            </div>
        );
    }
}

export default Stories;
