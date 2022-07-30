import React from "react"

const NavBar = (props) => {
    return (
        <nav className="navbar sticky-top navbar-expand-md navbar-dark bg-dark h2">
            <div className="container-fluid">

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style={{width: "100%"}}>
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav justify-content-center">
                <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#about_me">About Me</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#education">Education</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#projects">Projects</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#contact">Contact Me</a>
                </li>
            </ul>
            </div>
            </div>
        </nav>
    )
}

export default NavBar