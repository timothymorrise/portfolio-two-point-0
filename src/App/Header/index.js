// HEADER -- COMPONENT
// ==============================

// IMPORT FROM PACKAGES
import React, { Component } from 'react'

// IMPORT FROM FILES - COMPONENTS, CSS
import HeaderGuts from "./HeaderGuts"
import "./Header.css"

class Header extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.props.toggleMenu()
    }


    render() {
        return (
            <header>
                <HeaderGuts 
                isMenuActive={this.props.isMenuActive}
                handleClick={this.handleClick} />
            </header>
        )
    }
}


export default Header