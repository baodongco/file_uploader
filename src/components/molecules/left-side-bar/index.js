import React, { Component } from 'react';
import './left-side-bar.scss';
import Logo from '../../../logo.svg'

class LeftSideBar extends Component {

    render() {
        let itemsRender = this.props.fileList.map((file) => {
            return <div onClick={() => this.props.handleSelectFile(file.id)} key={file.id} className={`left-side-bar--file-list--file--item ${file.id === this.props.activeItemIndex ? 'active' : ''}`}>
                <div className="left-side-bar--file-list--file--item--icon">
                    <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.52 1.92432H13.0229V14.1364C13.0229 14.9477 12.3625 15.6081 11.5512 15.6081H6.51475H2.50974V16.0608C2.50974 16.5792 2.93047 16.9999 3.44885 16.9999H8.48353H13.5182C14.0366 16.9999 14.4573 16.5792 14.4573 16.0608V2.86344C14.4573 2.34506 14.0384 1.92432 13.52 1.92432Z" fill="#38C0FB"/>
                        <path d="M6.51474 15.0756H11.5494C12.0678 15.0756 12.4885 14.6549 12.4885 14.1365V1.92439V0.939119C12.4885 0.420739 12.0678 0 11.5494 0H6.51474H4.84066V0.310672C4.84419 0.342627 4.84599 0.376358 4.84599 0.410088V2.45698V2.98246C4.84599 3.71209 4.25304 4.30503 3.52341 4.30503H2.99793H0.951037C0.924408 4.30503 0.896004 4.30326 0.869375 4.30148H0.542725V14.1365C0.542725 14.6549 0.963464 15.0756 1.48184 15.0756H2.5115H6.51474ZM6.7047 11.8837H3.42222C3.17723 11.8837 2.9784 11.6848 2.9784 11.4398C2.9784 11.1948 3.17723 10.996 3.42222 10.996H6.70647C6.95146 10.996 7.15029 11.1948 7.15029 11.4398C7.15029 11.6848 6.94968 11.8837 6.7047 11.8837ZM9.98895 9.61844H3.42222C3.17723 9.61844 2.9784 9.41959 2.9784 9.17462C2.9784 8.92962 3.17723 8.7308 3.42222 8.7308H9.98895C10.2339 8.7308 10.4328 8.92962 10.4328 9.17462C10.4328 9.41959 10.2339 9.61844 9.98895 9.61844ZM3.42222 6.32529H9.98895C10.2339 6.32529 10.4328 6.52412 10.4328 6.76911C10.4328 7.0141 10.2339 7.21293 9.98895 7.21293H3.42222C3.17723 7.21293 2.9784 7.0141 2.9784 6.76911C2.9784 6.52412 3.17723 6.32529 3.42222 6.32529Z" fill="#A070DC"/>
                        <path d="M0.95077 3.77192H3.52314C3.52492 3.77192 3.52847 3.77192 3.53024 3.77192C3.95986 3.76837 4.30781 3.42042 4.31136 2.9908C4.31136 2.98903 4.31136 2.98548 4.31136 2.9837V0.409557C4.31136 0.171671 4.11608 0.0136719 3.91372 0.0136719C3.81608 0.0136719 3.71844 0.0491773 3.63678 0.13084L0.670276 3.09732C0.421738 3.34586 0.59749 3.77192 0.95077 3.77192Z" fill="#38C0FB"/>
                    </svg>
                </div>
                <div className="left-side-bar--file-list--file--item--info">
                    <div className="left-side-bar--file-list--file--item--info--title">
                        <span>
                            {file.name}
                        </span>
                    </div>
                    <div className="left-side-bar--file-list--file--item--info--description">
                        <span>Nam vel porta velit</span>
                    </div>
                </div>
            </div>
        })
        return (
            <div className={`left-side-bar ${this.props.className}`}>
                <div className="left-side-bar--header">
                    <img src={Logo} alt="logo" className=""/>
                </div>
                <div className="left-side-bar--file-list">
                    <div className="left-side-bar--file-list--label">
                        <label>FILES</label>
                    </div>
                    {itemsRender.length > 0 ? 
                    <div className="left-side-bar--file-list--file">
                        {itemsRender}
                    </div>
                    :''
                    }
                </div>
                <div className="left-side-bar--button">{this.props.children}</div>
            </div>
        )
    }
}

export default LeftSideBar;
