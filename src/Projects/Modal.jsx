import React from "react"

const Modal = (props) => {
    return (
        <>
            <div className="modal fade" id="project1Modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                <div className="modal-content bg-dark">
                    <div className="modal-header">
                    <h5 className="modal-title" id="project1ModalLabel">UniReels</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    <div className="row g-0">
                    <div className="col-md-4 d-flex flex-wrap align-items-center">
                        <a href="" data-bs-toggle="modal" data-bs-target="#img1Modal"><img src="img/unireels_screenshot.png" className="img-fluid rounded-start w-100" alt="My Photo" /></a>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body about">
                        <div className="card-text">This is a university project for the course 'Databases and Web Services'.<br />
                            this is an IMDB clone that features movies and tv series as well as actors and crew in a card style that you can search and click to go to a specific page where you can get information about it.<br />
                            Technologies used :<br />
                            <ul>
                            <li>HTML, CSS(Bootstrap) for front-end.</li>
                            <li>PHP for back-end; Querying, sessions, permissions.</li>
                            <li>AJAX for search auto-completion.</li>
                            <li>SQL database</li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>
                    <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <a href="https://github.com/hanialnahas/UniReels" target="_blank"><button type="button" className="btn btn-primary">Visit This Project Repository</button></a>
                    </div>
                </div>
                </div>
            </div>
            <div className="modal fade" id="img1Modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title" id="img1ModalLabel">UniReels</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" data-bs-toggle="modal" data-bs-target="#project1Modal"></button>
                    </div>
                    <div className="modal-body">
                    <img src="img/unireels_screenshot.png" className="w-100" />
                    </div>
                    </div>
                </div>
                </div>
        </>
    )
}

export default Modal