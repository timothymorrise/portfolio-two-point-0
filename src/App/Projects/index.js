// PROJECTS -- COMPONENT
// ==============================

// IMPORT FROM PACKAGES
import React from 'react'

// IMPORT FROM FILES
import "./Main.css"
const boyCounterImg1 = require(`../../images/mfbc.png`);
const boyCounterImg2 = require(`../../images/mfbc-2.png`);
const screamingImg1 = require(`../../images/screaming-at-awards-shows.png`)
// const screamingImg2 
const marqueeSaladImg = require(`../../images/marquee-salad-image-1.png`)
const marqueeSaladImg2 = require(`../../images/marquee-salad-image-2.png`)

function Projects() {
    return (
        <main>
            <h1>Boy Counter Experience</h1>
            <p>An app that uses the Youtube API to watch the webseries "Monster Factory" to show the videos
            to track the number of times the hosts say "boy" (a common idiom of the McElroys). Created using 
            React and Redux.  
            </p>
            <img class="project-image" src={boyCounterImg1} />
            <img class="project-image" src={boyCounterImg2} />
            <hr />
            <h1>Screaming At Awards Shows</h1>
            <p>This app uses a local API to fill out data from film and television award shows. The user can then 
                use a form to generate an Oscar ballot. Created using React, Redux, React-Router, </p>
            <img class="project-image" src={screamingImg1} />
            <hr />
            <h1>Marquee Salad</h1>
            <a target="_blank" href="http://marqueesalad.surge.sh/">Link to view</a>
            <p>A simple web app made to help with the chore of knowing what letters to pull before changing a marquee. 
                This project was made to help a local arthouse theater I work part time for.</p>
            <img class="project-image" id="marquee-salad-image-1"  src={marqueeSaladImg} />
            <img class="project-image" src={marqueeSaladImg2} />
        </main>
    )
}

export default Projects
