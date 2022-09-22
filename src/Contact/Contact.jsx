import React, { useEffect } from "react"

const Contact = (props) => {
    
    

    useEffect(() => {
        // TODO: Script's document.write doesn't work in react. find another solution
        const script = document.createElement('script')
        script.setAttribute('data-name', 'bmc-button')
        script.src = 'https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js'
        script.setAttribute('data-slug', 'hanialnahas')
        script.setAttribute('data-color', '#FFDD00')
        script.setAttribute('data-emoji', '')
        script.setAttribute('data-color', '#FFDD00')
        script.setAttribute('data-font', 'Inter')
        script.setAttribute('data-text', 'Buy me a coffee')
        script.setAttribute('data-outline-color', '#000000')
        script.setAttribute('data-font-color', '#000000')
        script.setAttribute('data-coffee-color', '#ffffff')
        script.async = true
        document.getElementById('buyMeCoffee').appendChild(script)
        return () => {
            document.getElementById('buyMeCoffee').removeChild(script)
        }
    }, [])

    return (
        <div className="container title scrollable_to fillDiv" id="contact">
            <h1 className="pb-2 border-bottom">Contact Me:</h1>
            <div className="container pt-4"><ul>
            <li><i className="fa fa-linkedin"></i> LinkedIn: <a href="https://www.linkedin.com/in/hanialnahas" target="_blank" className="socialLink">hanialnahas</a></li>
            <li><i className="fa fa-github"></i> GitHub: <a href="https://www.github.com/hanialnahas" target="_blank" className="socialLink">hanialnahas</a></li>
            <li><i className="fa fa-facebook-f"></i> Facebook: <a href="https://www.facebook.com/Hani.Nahas2000" target="_blank" className="socialLink">Hani Nahas</a></li>
            <li><i className="fa fa-linkedin"></i> Instagram: <a href="https://www.instagram.com/nahas_hani/" target="_blank" className="socialLink">nahas_hani</a></li>
            <li><i className="fa fa-envelope"></i> Email: <a href="mailto:haninahas20@gmail.com" className="socialLink">haninahas20@gmail.com</a></li>
            </ul></div>
            <div id="buyMeCoffee"></div>
        </div>
    )
}

export default Contact