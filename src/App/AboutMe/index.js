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
                <img class="profile-picture" src={require(`../../images/profile-pic.jpg`)} />
                <br />
                <br />
                <h2>
                    I blame Shnorlack the Great.</h2>
                <br />
                <p>
                    My first forays into programming was helping my friend create a responsive
                    spreadsheet for her D&D Character, Shnorlack the Gnome Paladin. After many a succesful jaunt
                    with Shnorlack, I began to be intrigued by the excitement I experience of building her algorithms.
                    What more could I do? What else could I learn tinkering with code?
            </p>
                <br />
                <p>
                    And so I took a byte. I picked up Javascript and Node.js. I found myself hooked. I love that feeling of
                    working on a program when I find a bug and I'm forced to try eight new things until I realize
                    in an instant that ninth thing that makes everything fall into place.
            </p>
                <br />
                <p> I wanted to expand my skills, so I attended V School's Full Stack Web Development Program. I'm currently
                    building projects with Javascript, Node.js, React/Redux and looking to learn even more. [WHAT TO ADD/CHANGE, MARY?]
                </p>
                {/* Between my fullstack and my personal a year experience */}
                {/* When I'm coding I like to  */}
            </div>
        </section>
    )
}

export default AboutMe
