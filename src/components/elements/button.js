import React, { Component } from 'react';
import './button.scss';
import 'font-awesome/css/font-awesome.min.css';

class Button extends Component {

    render() {
        return (
            <button className={`button ${this.props.className}`}>
                {this.props.icon ? <i className={`${this.props.icon}`}></i> : null}{this.props.name}
            </button>
        )
    }
}

export default Button;