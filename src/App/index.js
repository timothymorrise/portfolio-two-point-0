// APP -- COMPONENT
// ==============================

// IMPORT FROM PACKAGES
import React from 'react'

// IMPORT FROM FILES -- COMPONENTS, CSS
import Sidebar from "./Sidebar"
import Header from "./Header";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact";
import "./App.css"

function App() {
    return (
        <div className="page-wrapper">
            <Sidebar />
            <Header />
            <main>
                {/* <Sidebar /> */}
                <Projects />
                <Resume />
                <AboutMe />
                <Contact />
            </main>
            <footer>
            </footer>
        </div>
    )
}

export default App

// GRAVY -- 
// ADD IMAGE LOAD FOR RIGHT CLICK
