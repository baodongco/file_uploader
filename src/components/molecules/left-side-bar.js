import React, { Component } from 'react';
import './left-side-bar.scss';

class LeftSideBar extends Component {

    render() {
        return (
            <div className={`left-side-bar ${this.props.className}`}>
                <label><i className="fa fa-book-open"></i> Reader Zone</label>
                {this.props.children}
            </div>
        )
    }
}

export default LeftSideBar;