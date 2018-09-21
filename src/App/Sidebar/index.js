// SIDEBAR -- COMPONENT
// ==============================

// IMPORT FROM PACKAGES
import React, { Component } from 'react'

// IMPORT FROM FILES
import Menu from "./Menu"
import Button from "./Button"
import "./Sidebar.css"



// CONSTRUCTOR
class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuActive: false
        }
        this.toggleMenu = this.toggleMenu.bind(this)
    }

    toggleMenu() {
        this.setState(
            {
                menuActive: !this.state.menuActive
            })
    }

    render() {
        return (
            <div id="sidebar">
                <Button 
                    menuActive={this.state.menuActive}
                    toggleMenu={this.toggleMenu} />
                <Menu 
                    menuActive={this.state.menuActive} 
                    toggleMenu={this.toggleMenu} />
            </div>
        )
    }
}

export default Sidebar
