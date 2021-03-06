import React, { Component } from 'react';
import LeftSideBar from '../../molecules/left-side-bar'
import Button from '../../elements/button';
import FileViewer from 'react-file-viewer';
import './home-page.scss';

class HomePage extends Component {
    constructor() {
        super();

        this.state = {
            arrFiles: [],
            currentFile: null
        };
    }

    handleUpload = (e) => {
        const filesArr = Array.from(e.target.files);

        const arrFiles = filesArr.map((file) => {
            const src = window.URL.createObjectURL(file);
            let type = file.type.split('/')[1];
            if (type === 'vnd.openxmlformats-officedocument.wordprocessingml.document') {
                type = 'docx';
            }

            return { name: file.name, file, id: this.guidGenerator(), src, type: type };
        })

        this.setState({ arrFiles: [...this.state.arrFiles, ...arrFiles] });
        if (!this.state.currentFile) {
            this.setState({
                currentFile: this.state.arrFiles[0] ? this.state.arrFiles[0] : null
            });
        }
    }

    handleSelectFile = (id) => {
        this.setState({
            currentFile: this.state.arrFiles.find(file => {
                return file.id === id
            })
        });
    }

    guidGenerator = () => {
        const S4 = function() {
           return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        };
        return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
    }

    componentDidUpdate(preProps, prevState, snapshot) {
        if (!this.state.currentFile && this.state.arrFiles.length > 0) {
            this.setState({
                currentFile: this.state.arrFiles[0] ? this.state.arrFiles[0] : null
            });
        }
    }

    render() {
        return (
            <div className="home-page">
                <LeftSideBar handleSelectFile={this.handleSelectFile} fileList={this.state.arrFiles} activeItemIndex={this.state.currentFile ? this.state.currentFile.id : ''}>
                    <Button handleUpload={this.handleUpload} name={"Upload Files"} icon="fa fa-cloud-upload" className="upload-file"/>
                </LeftSideBar>
                <div className="home-page--content">
                    {this.state.currentFile ? 
                        <div>
                            <div className="home-page--content--title">
                                <svg width="35" height="41" viewBox="0 0 35 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M32.0187 4.64111H30.8199V34.0938C30.8199 36.0505 29.2272 37.6432 27.2706 37.6432H15.1238H5.46463V38.7349C5.46463 39.9852 6.47936 40.9999 7.72957 40.9999H19.872H32.0145C33.2647 40.9999 34.2794 39.9852 34.2794 38.7349V6.90605C34.2794 5.65584 33.269 4.64111 32.0187 4.64111Z" fill="#38C0FB"/>
                                    <path d="M15.1238 36.3588H27.2662C28.5164 36.3588 29.5312 35.3441 29.5312 34.0939V4.64119V2.26493C29.5312 1.01472 28.5164 0 27.2662 0H15.1238H11.0863V0.749269C11.0948 0.826337 11.0991 0.907686 11.0991 0.989035V5.92565V7.19298C11.0991 8.95269 9.66909 10.3827 7.90938 10.3827H6.64204H1.70542C1.6412 10.3827 1.5727 10.3784 1.50847 10.3742H0.72067V34.0939C0.72067 35.3441 1.7354 36.3588 2.98561 36.3588H5.4689H15.1238ZM15.5819 28.6606H7.66533C7.07448 28.6606 6.59494 28.181 6.59494 27.5902C6.59494 26.9993 7.07448 26.5198 7.66533 26.5198H15.5862C16.177 26.5198 16.6566 26.9993 16.6566 27.5902C16.6566 28.181 16.1728 28.6606 15.5819 28.6606ZM23.5027 23.1974H7.66533C7.07448 23.1974 6.59494 22.7178 6.59494 22.127C6.59494 21.5361 7.07448 21.0566 7.66533 21.0566H23.5027C24.0936 21.0566 24.5731 21.5361 24.5731 22.127C24.5731 22.7178 24.0936 23.1974 23.5027 23.1974ZM7.66533 15.2551H23.5027C24.0936 15.2551 24.5731 15.7346 24.5731 16.3255C24.5731 16.9164 24.0936 17.3959 23.5027 17.3959H7.66533C7.07448 17.3959 6.59494 16.9164 6.59494 16.3255C6.59494 15.7346 7.07448 15.2551 7.66533 15.2551Z" fill="#550CB1"/>
                                    <path d="M1.70474 9.09722H7.9087C7.91298 9.09722 7.92154 9.09722 7.92582 9.09722C8.96196 9.08865 9.80114 8.24947 9.8097 7.21334C9.8097 7.20906 9.8097 7.2005 9.8097 7.19622V0.987986C9.8097 0.41426 9.33873 0.0332031 8.85068 0.0332031C8.61519 0.0332031 8.37971 0.118834 8.18276 0.315785L1.02826 7.47023C0.428845 8.06965 0.852718 9.09722 1.70474 9.09722Z" fill="#38C0FB"/>
                                </svg>
                                <span>{this.state.currentFile ? (this.state.currentFile.name ? this.state.currentFile.name : '') : ''}</span>
                            </div>
                            <div className="home-page--content--display">
                                <FileViewer
                                    fileType={this.state.currentFile ? this.state.currentFile.type : null}
                                    filePath={this.state.currentFile ? this.state.currentFile.src : null}
                                    // errorComponent={CustomErrorComponent}
                                    // onError={this.onError}
                                    />
                            </div>
                        </div>
                    : null}
                </div>
            </div>
        )
    }
}

export default HomePage;