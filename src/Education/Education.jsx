import React from "react"

const Education = (props) => {
    return (
        <div className="container title scrollable_to fillDiv" id="education">
            <h1 className="pb-2 border-bottom">Where I Studied:</h1>
            <div className="card mt-3 bg-light">
                <div className="card-header">
                    B.Sc. Computer Science
                </div>
            <div className="card-body">
                <h5 className="card-title alignleft">Jacobs University Bremen <p className="location">Bremen, Germany</p></h5>
                <p className="card-text alignright smallDate">01/02/2021 -&#62; 09/06/2023</p>
                <div style={{clear: "both"}}></div>
                <p className="card-text">
                    <ul style={{"list-style-type": "square"}}>
                        <li>Computer Science Major, Robotics and Intelligent Systems Minor</li>
                        <li>Bachelor Thesis on the topic of 'Deep Reinforcement Learning for Industrial Tasks Management: A2C and IMPALA Approach'</li>
                    </ul>
                </p>
            </div>
            </div>
            <div className="card mt-3 bg-light">
            <div className="card-header">
                Information Technology Engineering
            </div>
            <div className="card-body">
                <h5 className="card-title alignleft">Damascus University <p className="location">Damascus, Syria</p></h5>
                <p className="card-text alignright smallDate">01/09/2018 -&#62; 31/01/2021</p>
                <div style={{clear: "both"}}></div>
                <p className="card-text">Studied 2 years before transfering to Jacobs University.</p>
            </div>
        </div>
        </div>
    )
}

export default Education