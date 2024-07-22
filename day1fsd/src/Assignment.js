import React from "react";
import './Assignment.css';

function Assignment() {

    
    const studentDetails = [{stuImg  : "image1.png", name : "Alfiya", education : "US support & Affiliate"},
                             {stuImg : "image2.png", name : "John", education : "OnBoarding Manager/Producer"},
                             {stuImg : "image3.png", name : "Micheal", education : "Growth Marketing"},
                             {stuImg : "image4.png", name : "Jack", education : "Software QA Tester / Customer Support"},
                             {stuImg : "image5.png", name : "priya", education : "Inbound and Marketing"},
                             {stuImg : "image6.png", name : "Sruthi", education : "Customer Support at Agorapulse"},
                             {stuImg : "image7.png", name : "Jasmitha", education : "Harness your social media"},
                             {stuImg : "image8.png", name : "Rahul", education : "CMO |Operations Manager"}
                            ];
    
   
        
        return (
            <div className="review-container">
                    {studentDetails.map((student, index) => 
                        (<div key={index} className="stu-section">
                            <img src={student.stuImg} width="200" height="150"/>
                            <div className="stu-details">
                                <h1>{student.name}</h1>
                                <p>{student.education}</p>
                            </div>
                            <hr />
                            <button className="connect-button">Connect</button>
                        </div>))}
            </div>
        )
    }
    
    export default Assignment;