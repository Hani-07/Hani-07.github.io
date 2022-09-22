import React from "react"

const Experience = () => {
    return (
        <div className="container title scrollable_to fillDiv" id="experience">
            <h1 className="pb-2 border-bottom">Professional Experience:</h1>
            <div className="card mt-3 bg-light">
                <div className="card-header">
                    <div className="alignleft">Software Engineer</div>
                    <div className="alignright text-secondary">Internship</div>
                    <div style={{clear: "both"}}></div>
                </div>
            <div className="card-body">
                <h5 className="card-title alignleft"><a href="https://muehlbauer.de/" target="_blank">Mühlbauer High Tech International</a><p className="location"> Roding, Germany</p></h5>
                <p className="card-text alignright smallDate">06/2022 -&#62; 08/2022</p>
                <div style={{clear: "both"}}></div>
                <p className="card-text">High responsibility full stack role in a project that boosts the team performance by displaying statistics from the agile sprints.<br />
                <ul>
                    <li><i>Java EE</i> server backend</li>
                    <li><i>ReactJS</i> UI frontend</li>
                    <li><i>Docker</i> and <i>Jenkins</i> for CI/CD</li>
                </ul>
                </p>
            </div>
            </div>
            <div className="card mt-3 bg-light">
            <div className="card-header">
                <div className="alignleft">Software Engineer Trainee</div>
                    <div className="alignright text-secondary">Internship</div>
                    <div style={{clear: "both"}}></div>
            </div>
            <div className="card-body">
                <h5 className="card-title alignleft"><a href="https://www.tradinos.com/" target="_blank">Tradinos Software</a><p className="location"> Damascus, Syria</p></h5>
                <p className="card-text alignright smallDate">06/2019 -&#62; 09/2019</p>
                <div style={{clear: "both"}}></div>
                <p className="card-text">Learned web development basics.</p>
            </div>
        </div>
        </div>
    )
}

export default Experience