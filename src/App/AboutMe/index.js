// ABOUT ME -- COMPONENT
// ==============================

// IMPORT FROM PACKAGES
import React from 'react'

// IMPORT FROM FILES
import "./About.css"

function AboutMe() {
    return (
        <section id="about-me">
            <div className="section-guts-container">
                <h1 className="section-title">About Me</h1>
                <h2>"Take a <span id="byte">byte<a id="shh-a-secret" href="https://youtu.be/jdH2Sy-BlNE?t=742" target="blank" >
                    .</a>
                </span> Help yourself."
                    <span id="janelle"> &mdash; Janelle Monae</span></h2>
                <div id="about-container">

                    <img class="profile-picture" src={require(`../../images/profile-pic.jpg`)} />
                    <br />
                    <br />
                    <p>
                        In coding and in life my philosphy is to "take a byte:" that if I'm intrigued by something to get in there and give it a gnaw.
                    </p>
                    <br />
                    <p> That's how I started coding. It began as me applying what I learned in Spreadsheet Modelling from my Economics studies; I had a go at building a responsive spreadsheet for my friend's D&D character, Shnorlack The Great. It soon escalated to me learning about web development and jumping into my first Javascript tutorial.</p>
                    <br />
                    <p>
                        I since have graduated from V School's Full Stack Development course to expand on my love for coding, and looking for the next savory piece of grissel I can chew on.
                    </p>
                    <br />
                    <p>
                        When I'm not coding I'm usually crying through a French movie or vogueing my way across a dancefloor. Life's ambitions include creating a responsive LED gown and teaching a robot how to love. Will settle for an alien or a canadian actor on the latter.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutMe
