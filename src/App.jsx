import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Hero from './Hero/Hero'
import NavBar from './NavBar'
import Divider from './Divider'
import About from './About'
import Education from './Education'
import Projects from './Projects'
import './index.css'
import Contact from './Contact'
import Footer from './Footer'

const App = (props) => {
    return (
        <div>
            <NavBar />
            <Hero />
            <Divider />
            <About />
            <Divider />
            <Education />
            <Projects />
            <Divider />
            <Contact />
            <Footer />
        </div>
    )
}

export default App