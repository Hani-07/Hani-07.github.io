import React from "react";

const Project = (props) => {
    return (
        <div className="feature col">
            <a href={props.link || "javascript:;"} className="alignleft">
                <h2>{props.title}</h2>
            </a>
            <h3 className="alignright text-secondary">{props.date}</h3>
            <div style={{clear: "both"}}></div>
            {props.text}
        </div>
    )
}

export default Project