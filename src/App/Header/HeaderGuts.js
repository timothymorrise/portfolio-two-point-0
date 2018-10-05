// HEADER -- COMPONENT

// IMPORT FROM PACKAGES
import React, { Component } from 'react'

// FUCTION
class HeaderGuts extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let isClicked = "unclicked"
        if (this.props.isMenuActive) {
            isClicked = "clicked"
        }
        return (
            <div>
                <div className="header-background">
                    <div className="header-background-part"></div>
                    <div className="header-background-part"></div>
                </div>
                <div className="header-foreground">
                    <div className="header-guts-container">
                        <div className="header-titles">
                            <h1>Timothy Morrise</h1>
                            <h2>Full Stack Web Developer</h2>
                        </div>
                        <div className="header-menu-button-container">
                            <div id="header-menu-button"
                                className={isClicked}
                                onClick={this.props.handleClick}>
                                <p>MENU</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default HeaderGuts
