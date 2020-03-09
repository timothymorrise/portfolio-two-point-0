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
                <div id="resume-content-container">
                    <div id="resume-downloads">
                        <a href="">Download PDF</a>
                        <span id="lil-line"> | </span>
                        <a href="">Download "flat" version</a>
                    </div>
                    <h2>Experience</h2>
                    <div className="job">
                        <h3>Salt Lake Film Society</h3><span>Salt Lake City, UT — Front of House Staff / Development Assistant</span>
                        <h4>MAY 2015 - PRESENT</h4>
                        <ul>
                            <li>Worked on contract committee of people to coauthor Collective Bargaining Agreement to provide wage parity and industry standard practices to Front of House Staff</li>
                            <li>Trained and managed team of 15+ Front of House staff on Union Procedures and Practices, and team of 10+  volunteers on donor management in company database</li>
                            <li>Saved the nonprofit $1000, initialized a retention program to track inventory</li>
                            <li>Managed regular high pressure customer loads of up to a rate of 1500/hour</li>
                        </ul></div>
                    <div className="job">
                        <h3>Church of Jesus Christ of Latter-day Saints</h3><span>Salt Lake City, UT  — Young Church Service Missionary</span>
                        <h4>APRIL 2014 - APRIL 2016</h4>
                        <ul>
                            <li>Marathon tested 1000 digital media per hour assets during peak QC hours</li>
                            <li>Product tested database and UI interface for Digital Media QC Programs</li>
                            <li>Researched, presented and piloted  a program for QC Mobile testing</li>
                            <li>Quality Checked a variety of high volume websites organized in a task manager</li>
                        </ul>
                    </div>
                    <h2>Education and Certifications</h2>
                    <div className="education-item">
                        <h3> Full Stack Web Development</h3>
                        <span id="lil-line"> | </span>
                        <span>V School &mdash; 2018</span>
                    </div>
                    <div className="education-item">
                        <h3>Live Event Technician Certification</h3>
                        <span id="lil-line"> | </span>
                        <span>International Association of Theatrical and Stage Employees &mdash; 2019</span>
                    </div>
                    <div className="education-item">
                        <h3>Bachelor's of Science &mdash; Economics </h3>                    <span id="lil-line"> | </span><span>Southern Utah University &mdash; 2012</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume
