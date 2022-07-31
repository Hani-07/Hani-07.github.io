import React from "react"
import Modal from "./Modal"

const Projects = (props) => {
    return (
        <>
        <div id="projects" className="container px-4 py-5 title scrollable_to">
            <h2 className="pb-2 border-bottom">Projects</h2>
            <div className="row g-4 py-5 row-cols-1 row-cols-md-3 ">
            <div className="feature col text-warning"><a href="" data-bs-toggle="modal" data-bs-target="#project1Modal">
                <h2>UniReels</h2>
                </a>
                <p>An IMDB clone as a university project where you can get information about movies, tv series, actors, and studios.</p>
            </div>
            <div className="feature col text-warning"><a href="" data-bs-toggle="modal" data-bs-target="#project2Modal">
                <h2>Covid Numbers</h2>
                </a>
                <p>A telegram bot built in python that scrapes the web for the Covid-19 statistics and send you information based on your commands.</p>
            </div>
            <div className="feature col text-warning"><a href="" data-bs-toggle="modal" data-bs-target="#project3Modal">
                <h2>MicroBlog using Flask</h2>
                </a>
                <p>A microblog written with python and the Flask framework.</p>
            </div>
            </div>
        </div>
        <Modal />
        </>
    )
}

export default Projects