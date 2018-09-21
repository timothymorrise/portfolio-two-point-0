// HEADER -- COMPONENT

// IMPORT FROM PACKAGES
import React from 'react'

// IMPORT FROM FILES
import "./Header.css";

// FUCTION
function Header() {
    return (
        <header>
            <div className="header-background">
                <div className="header-background-part"></div>
                <div className="header-background-part"></div>
            </div>
            <div className="header-titles">
                <h1>Timothy Morrise</h1>
                <h2>Full Stack Web Developer</h2>
            </div>
        </header>
    )
}

export default Header
