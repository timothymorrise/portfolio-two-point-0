// APP -- COMPONENT
// ==============================

// IMPORT FROM PACKAGES
import React, { Component } from 'react'

// IMPORT FROM FILES -- COMPONENTS, CSS
import Sidebar from "./Sidebar"
import Header from "./Header";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Skills from "./Skills";
import Resume from "./Resume";
import Contact from "./Contact";
import "./App.css"

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isMenuActive: false,
            isToggleTimedOut: false
        }
        this.toggleMenu = this.toggleMenu.bind(this);
        this.timeOutToggle = this.timeOutToggle.bind(this);
    }

    timeOutToggle() {
        this.setState({ isToggleTimedOut: true})
        const resetTimer = () => {
            this.setState({isToggleTimedOut: false})
        }
        setTimeout(resetTimer, 1000)
    }

    toggleMenu() {
        let { isMenuActive } = this.state
        if (!isMenuActive) {
            this.setState( { 
                isMenuActive: true,
                isToggleTimedOut: false
            })
        }
        if (isMenuActive) {
            this.timeOutToggle()
            this.setState( { isMenuActive: false })
        }
    }

    render() {
        return (
            <div className="page-wrapper">
                <Sidebar isMenuActive={this.state.isMenuActive}
                        toggleMenu={this.toggleMenu} 
                        isToggleTimedOut={this.state.isToggleTimedOut}/>
                <Header isMenuActive={this.state.isMenuActive}
                        toggleMenu={this.toggleMenu}/>
                <main>
                    <Projects />
                    <Skills />
                    <Resume />
                    <AboutMe />
                    <Contact />
                </main>
                <footer>
                </footer>
            </div>
        )
    }
}

export default App

// colors: projects - purple highs, skills, soft blue, resume - pink, about me, yellow, contact footer - backgroudn image
