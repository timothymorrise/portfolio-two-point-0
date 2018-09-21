// MENU -- COMPONENT 
// ==============================

// IMPORT FROM PACKAGES
import React, { Component } from 'react'

// IMPORT FROM FILES
import "./Menu.css";

let counter = 0

// CONSTRUCTOR
export default class Menu extends Component {
    constructor(props) {
        super(props)
        this.handleMouseDown = this.handleMouseDown.bind(this)
        this.handleMouseLeave = this.handleMouseLeave.bind(this)
    }

    handleMouseDown() {
        this.props.toggleMenu()
    }

    handleMouseLeave() {
        if (this.props.menuActive) {
            this.props.toggleMenu()
        }
    }

    render() {
        let visibility = "hide";
        if (this.props.menuActive) {
            visibility = "show";
        }

        console.log("visibility:", this.props.menuActive, visibility);
        return (
            <div id="flyoutMenu"
                className={visibility}
                onMouseDown={this.handleMouseDown}
                onMouseLeave={this.handleMouseLeave}
            >
                <h2><a href="#">Home</a></h2>
                <h2><a href="#">About</a></h2>
                <h2><a href="#">Contact</a></h2>
                <h2><a href="#">Search</a></h2>
            </div>
        );
    }
}
