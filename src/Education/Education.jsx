
const Education = (props) => {
    return (
        <div className="container px-4 py-5 title scrollable_to" id="education">
            <h2 className="pb-2 border-bottom">Education</h2>
            <div className="card mt-5 bg-secondary">
                <div className="card-header">
                    B.Sc. Computer Science
                </div>
            <div className="card-body">
                <h5 className="card-title">Jacobs University Bremen <p className="location">Bremen, Germany</p></h5>
                <p className="card-text">01/02/2021 - present</p>
                <p className="card-text">- Major in Computer Science<br />- Minor in Robotics and Intelligent Systems</p>
            </div>
            </div>
            <div className="card mt-5 bg-secondary">
            <div className="card-header">
                Information Technology Engineering
            </div>
            <div className="card-body">
                <h5 className="card-title">Damascus University <p className="location">Damascus, Syria</p></h5>
                <p className="card-text">01/09/2018 - 31/01/2021</p>
                <p className="card-text">Studied 2 years before transfering to Jacobs University.</p>
            </div>
        </div>
        </div>
    )
}

export default Education