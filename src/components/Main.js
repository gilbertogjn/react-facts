import React from "react"
import logo from "../images/react-icon.png"

export default function Main(props) {
    return (
        <main className={props.darkMode ? "dark" : ""}>
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including 
                    mobile apps
                </li>
            </ul>
            <img className="main--logo-bg" src={logo} />
        </main>
    )
}