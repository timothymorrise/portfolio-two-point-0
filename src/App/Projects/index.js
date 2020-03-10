// PROJECTS -- COMPONENT
// ==============================

// IMPORT FROM PACKAGES
import React, { Component } from 'react'

// IMPORT FROM FILES
import "./Main.css"
const frontImages = {
    boyCounter: require("../../images/boy-counter-front.png"),
    screaming: require("../../images/screaming-front.png"),
    marquee: require("../../images/marquee-front.png")
}

const revealImages = {
    boyCounter: require("../../images/boy-counter-reveal.png"),
    screaming: require("../../images/screaming-reveal.png"),
    marquee: require("../../images/marquee-reveal.png")
}


class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgSrc: {
                boyCounter: frontImages.boyCounter,
                screaming: frontImages.screaming,
                marquee: frontImages.marquee
            }
        };
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
    }

    handleMouseOver(e) {
        let { name } = e.target
        this.setState(prevState => {
            return {
                imgSrc: {
                    ...prevState.imgSrc,
                    [name]: revealImages[name]
                }
            }
        })
    }

    handleMouseOut(e) {
        let { name } = e.target
        this.setState(prevState => {
            return {
                imgSrc: {
                    ...prevState.imgSrc,
                    [name]: frontImages[name]
                }
            }
        })
    }

    render() {
        return (
            <section id="projects">
                <div id="projects-cards-wrapper" className="section-guts-container">
                    <h1 className="section-title">Projects</h1>
                    <div id="project-cards-container">
                        <div className="project-card">
                            <a target="_blank" href="http://marqueesalad.surge.sh/">
                                <img name="marquee"
                                    class="project-image"
                                    src={this.state.imgSrc.marquee}
                                    onMouseOver={this.handleMouseOver}
                                    onMouseOut={this.handleMouseOut} />
                            </a>
                            <a target="_blank" href="http://marqueesalad.surge.sh/">
                                <h1>Marquee Salad</h1>
                            </a>

                            <p>A simple web app made to help with the chore of knowing what letters to pull before changing a marquee.
                    This project was made to help a local arthouse theater I work part time for.</p>
                            <a href="https://github.com/timothymorrise/Marquee-Salad" target="blank"
                                class="github-link">
                                 (GITHUB REPOSITORY) </a>
                    </div>
                    <div className="project-card">
                        <a target="_blank" href="https://screaming-at-awards-shows.herokuapp.com/">
                            <img name="screaming"
                                class="project-image"
                                src={this.state.imgSrc.screaming}
                                onMouseOver={this.handleMouseOver}
                                onMouseOut={this.handleMouseOut} />
                        </a>

                        <hr />
                        <a target="_blank" href="https://screaming-at-awards-shows.herokuapp.com/">
                            <h1 id="screaming-title">Screaming At Awards Shows</h1>
                        </a>

                        <p>This app uses a local API to fill out data from film and television award shows. The user can then
                                use a form to generate an Oscar ballot. Created using React, Redux, React-Router, </p>
                        <a href="https://github.com/timothymorrise/screaming-at-awards-shows" target="blank"
                            class="github-link">
                            (GITHUB REPOSITORY) </a>
                    </div>

                    <div className="project-card">
                        <a target="_blank" href="http://monsterfactoryboycounter.surge.sh/">
                            <img name="boyCounter"
                                className="project-image"
                                src={this.state.imgSrc.boyCounter}
                                onMouseOver={this.handleMouseOver}
                                onMouseOut={this.handleMouseOut}
                            />
                        </a>
                        <a target="_blank" href="http://monsterfactoryboycounter.surge.sh/">
                            <h1>Boy Counter Experience</h1>
                        </a>

                        <p>An app that uses the Youtube API to watch the webseries "Monster Factory" to show the videos
                        to track the number of times the hosts say "boy" (a common idiom of the McElroys). Created using
                        React and Redux.
                            </p>
                        <a href="https://github.com/timothymorrise/Boy-Counter-Experience" target="blank"
                            class="github-link"
                        > (GITHUB REPOSITORY) </a>
                    </div>
                </div>






                </div>
            </section >
        )
    }
}

export default Projects

// link to the git hub
// emphasize languages and purpose and lesson
