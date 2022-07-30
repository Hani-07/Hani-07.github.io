import React from "react"

const Hero = (props) => {
    return (
        <section id="hero" className="d-flex flex-column justify-content-center title">
            <div className="container">
            <h1><b>Hani Alnahas</b></h1>
            <p><i>B.Sc. Computer Science, Jacobs University bremen</i></p>
            <div className="socials">
                <a href="https://www.linkedin.com/in/hanialnahas" target="_blank"><i className="fa fa-linkedin orange"></i></a>
                <a href="https://www.github.com/hanialnahas" target="_blank"><i className="fa fa-github orange"></i></a>
                <a href="https://www.facebook.com/Hani.Nahas2000" target="_blank"><i className="fa fa-facebook-f orange"></i></a>
                <a href="https://www.instagram.com/nahas_hani/" target="_blank"><i className="fa fa-instagram orange"></i></a><br />
                
                <button type="button" className="btn cv-download"><a  href="resume-new.pdf" target="_blank"><i className="fa fa-user"></i> My CV</a></button>
            </div>
            
            </div>
        </section>
    )
}
export default Hero