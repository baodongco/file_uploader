import React, { Component } from 'react';
import './button.scss';
import 'font-awesome/css/font-awesome.min.css';

class Button extends Component {
    constructor() {
        super()

        this.state = {
            files: []
        }
    }

    triggerInputFile = () => this.fileInput.click()

    onChange = (e) => {
        const files = e.target.files;
        const filesArr = Array.prototype.slice.call(files);

        this.setState({ files: [...this.state.files, ...filesArr] });
    }

    render() {
        return (
            <div className="input-button">
                <button onClick={this.triggerInputFile} className={`button ${this.props.className}`}>
                    {this.props.icon ? <i className={`${this.props.icon}`}></i> : null}{this.props.name}
                </button>
                <input multiple onChange={this.props.handleUpload} ref={fileInput => this.fileInput = fileInput} type="file" name="inputFile"></input>
            </div>
        )
    }
}

export default Button;