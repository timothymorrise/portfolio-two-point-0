// SKILLS -- COMPONENT
// ==============================

// IMPORT FROM PACKAGES
import React from 'react'

// IMPORT FROM FILES
import "./Skills.css"
const css3Logo = require("../../images/skills-logos/css3.png")
const es6Logo = require("../../images/skills-logos/es6.png")
const expressLogo = require("../../images/skills-logos/express.png")
const gitLogo = require("../../images/skills-logos/git.png")
const html5Logo = require("../../images/skills-logos/html5.png")
const nodejsLogo = require("../../images/skills-logos/nodejs.png")
const pythonLogo = require("../../images/skills-logos/python.png")
const reactLogo = require("../../images/skills-logos/react.png")

function Skills() {
    return (
        <section id="skills">
            <div className="section-guts-container">
                <h1 className="section-title">Skills</h1>
                <div id="skills-logos-container">
                    <img src={css3Logo} alt=""/>
                    <img src={es6Logo} alt=""/>
                    <img src={html5Logo} alt=""/>
                    <img src={reactLogo} alt=""/>
                    <img src={expressLogo} alt=""/>
                    <img src={gitLogo} alt=""/>
                 
                    <img src={nodejsLogo} alt=""/>
                    <img src={pythonLogo} alt=""/>
                    
                </div>
            </div>
        </section>
    )
}

export default Skills
