// BUTTON -- COMPONENT
// ==============================

import React, { Component } from 'react'

// VARIABLES

const shrunkButtonStyle = {
    border: "0px solid #ff0073",
    height: "0px",
    width: "0px",
}

export default class Button extends Component {
    constructor(props) {
        super(props)
        this.state = {
            buttonShrunk: false,
            buttonStyle: {}
        }
        this.handleMouseEnter = this.handleMouseEnter.bind(this)
    }


    handleMouseEnter() {
        this.props.toggleMenu()
    }

    render() {
        let visibility = "show";
        if (this.props.menuActive) {
            visibility = "hide";
        }
        return (
            <div id="sidebar-button-container">
                <div 
                        id="sidebar-button"
                        className={visibility}
                        style={this.state.buttonStyle}
                        onMouseEnter={this.handleMouseEnter}
                ></div>
            </div>
        )
    }
}
