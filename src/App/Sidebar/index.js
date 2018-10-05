// SIDEBAR -- COMPONENT
// ==============================

// IMPORT FROM PACKAGES
import React, { Component } from 'react'

// IMPORT FROM FILES
import Menu from "./Menu/"
import Button from "./Button"
import "./Sidebar.css"



// CONSTRUCTOR
class Sidebar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="sidebar">
                <Button 
                    isMenuActive={this.props.isMenuActive}
                    isToggleTimedOut = {this.props.isToggleTimedOut}
                    toggleMenu={this.props.toggleMenu} />
                <Menu 
                    isMenuActive={this.props.isMenuActive} 
                    toggleMenu={this.props.toggleMenu} />
            </div>
        )
    }
}

export default Sidebar
