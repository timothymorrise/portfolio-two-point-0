// MENU -- COMPONENT 
// ==============================

// IMPORT FROM PACKAGES
import React, { Component } from 'react'

// IMPORT FROM FILES
import "./Menu.css";
import MenuLinks from "./MenuLinks"

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
        if (this.props.isMenuActive) {
            this.props.toggleMenu()
        }
    }

    render() {
        let visibility = "hide";
        if (this.props.isMenuActive) {
            visibility = "show";
        }

        console.log("visibility:", this.props.isMenuActive, visibility);
        return (
            <div id="menu-container"
                className={visibility}
                onMouseDown={this.handleMouseDown}
                onMouseLeave={this.handleMouseLeave}
            >
               <MenuLinks /> 
            </div>
        );
    }
}
