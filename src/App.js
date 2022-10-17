import React from "react"
import Main from "./components/Main"
import Navbar from "./components/Navbar"

export default function App() {
    const [darkMode, setDarkMode] = React.useState(false)

    function toggleDarkMode() {
        setDarkMode(prev => !prev)
    }

    return (
        <div className="container">
            <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
            <Main darkMode={darkMode}/>
        </div>
    )
}