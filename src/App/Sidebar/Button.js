// BUTTON -- COMPONENT
// ==============================

import React, { Component } from 'react'

// VARIABLES

export default class Button extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isButtonShrunk: false
        }
        this.handleMouseEnter = this.handleMouseEnter.bind(this)
        this.menuChange = this.menuChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    menuChange() {
        const { isMenuActive,
            isToggleTimedOut,
            toggleMenu } = this.props
        if (!isMenuActive && !isToggleTimedOut) {
            toggleMenu()
        }
    }

    handleMouseEnter() {
        this.menuChange()
    }

    handleClick() {
        this.menuChange()
    }

    render() {
        let visibility = "show";
        let menuText= "MENU"
        let position = this.props.position
        console.log(position)
        if (this.props.isMenuActive || position<.11) {
            visibility = "hide";
            menuText = ""
        }
        return (
            <div>
                <div id="sidebar-trigger-zone" 
                    onMouseEnter={this.handleMouseEnter}>
                    </div>
                <div id="sidebar-button-container">
                    <div
                        id="sidebar-button"
                        className={visibility}
                        onMouseEnter={this.handleMouseEnter}
                        onClick={this.handleClick} >
                        <p>{menuText}</p>
                        
                    </div>
                </div>
            </div>
        )
    }
}
