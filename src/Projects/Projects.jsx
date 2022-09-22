import React from "react"
import Project from "./Project"

const Projects = (props) => {
    return (
        <div id="projects" className="container title scrollable_to fillDiv"  style={{color: '#373D3F'}}>
            <h1 className="pb-2 border-bottom">Some Of The Projects I Worked On:</h1>
            <div className="row g-4 py-5 row-cols-1 row-cols-md-1 ">
            <Project title="Agile Development Team Statistics"
            text={<p>An internal web application that gets data from the Redmine API and calculates teams' progress and hours spent on each issue for better agile development. <br />Built with Java (Jakarta) EE, React, Docker, and Jenkins.</p>} date="2022" />
            <Project title="HLS Streaming Web Application" text={<p>Upload Videos and have them encoded to different resolutions, then stream them in auto mode to switch resolutions based on your internet bandwidth.<br />
            Made with NodeJS express and FFmpeg encoder.</p>} date="2022" />
            <Project title="Corona Management App" text={<p>Web application to monitor and inform you about possible corona cases.<br />            Scan a QR code when entering a venue, and check out when leaving.
            Gives you a list of possible infected people from the history of
            their visits if a person reports having covid.<br />
            Built with Flask, and MySQL.</p>} date="2022" />
            <Project title="UniReels" text={<p>University databases project.<br/>
            Built with PHP and MySQL to display information about movies and TV
            series.
            </p>} date="2021" />
            <Project title="Covid Numbers" text={<p>A Telegram bot that scrapes the web for Covid 19 statistics as a response to your commands. <br />Made with python.</p>} date="2020" />
            <Project title="Strategy Game" text={<p>A Java console-based strategy game.<br />Put your army that consists of different classes of troops on a grid and see each iteration of the game based on some pre-defined movement and strategy of the troops.<br />Built with Java.</p>} date="2019" />
            <Project title="Procedurally Generated City" text={<p>A procedurally generated city from user-given parameters such as the number of cars, buildings, gardens, and more.<br />Created with C++ and OpenGL.</p>} date="2019" />
            </div>
        </div>
    )
}

export default Projects