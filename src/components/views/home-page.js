import React, { Component } from 'react';
import LeftSideBar from '../molecules/left-side-bar'
import Button from '../elements/button';
import './home-page.scss';

class HomePage extends Component {

    render() {
        return (
            <div className="home-page">
                <LeftSideBar>
                    <Button name={"Upload Files"} icon="fa fa-cloud-upload" className="upload-file"/>
                </LeftSideBar>
            </div>
        )
    }
}

export default HomePage;