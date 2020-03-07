// RESUME -- COMPONENT
// ==============================

// IMPORT FROM PACKAGES
import React from 'react'

// IMPORT FROM FILES
import "./Resume.css"

function Resume() {
    return (
        <section id="resume">
            <div className="section-guts-container">
                <h1 className="section-title">Resume</h1>
                <img className="resume-image" src="https://i.imgur.com/wnPcRtw.png" />
                <a href="https://drive.google.com/file/d/1KlcUy8ZDLQfcCfyw10LHFcKZ43Z4Hit6/view?usp=sharing">
                Downloadable Link Available Here</a>
            </div>
        </section>
    )
}

export default Resume
