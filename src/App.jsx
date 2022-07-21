import './bootstrap/css/bootstrap.min.css'
import './bootstrap/js/bootstrap.bundle.min.js'
import Hero from './Hero/Hero'
import NavBar from './NavBar'
import './index.css'

const App = (props) => {
    return (
        <div className='container'>
            <NavBar />
            <Hero />
        </div>
    )
}

export default App