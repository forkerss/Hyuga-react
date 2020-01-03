import React from 'react';
import logo from "../../assets/images/logo.png"
import "./logo.css"

class Logo extends React.Component {
    renderNotATags() {
        return (
            <img src={logo} alt="Logo" />
        );
    }
    renderHasATags() {
        return (
            <a href="/">
                <img src={logo} alt="Logo" />
            </a>
        );
    }
    render() {
        return (
            <div className="logo">
                {
                    this.props.a ? this.renderHasATags() : this.renderNotATags()
                }
            </div>
        );
    }
}


export default Logo;