import React from "react"
import logo from "../images/react-icon.png"

export default function Navbar(props) {
    return (
        <nav className={props.darkMode ? "dark" : ""}>
            <div className="nav--logo">
                <img
                    className="nav--logo-img"
                    src={logo}
                />
                <h3 className="nav--logo-text">ReactFacts</h3>
            </div>
            <div className="toggler">
                <p className="toggler--light">Light</p>
                <div
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    )
}