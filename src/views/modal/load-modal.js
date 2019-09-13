import React from 'react';

export default class LoadModal extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            fileType: 'json',
            text: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        return (
            <div className='modal fade' id='LoadModal' tabIndex='-1' role='dialog' aria-labelledby='LoadModalTitle' aria-hidden='true'>
                <div className='modal-dialog' role='document'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5 className='modal-title' id='LoadModalTitle'>
                                Load from...
                            </h5>
                            <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                                <span aria-hidden='true'>&times;</span>
                            </button>
                        </div>
                        <div className='modal-body'>
                            <div className='form-group'>
                                <label htmlFor='LoadModalTextarea1'>Input:</label>
                                <textarea className='form-control' id='LoadModalTextarea1' rows='3' name='text' onChange={this.handleChange}></textarea>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='LoadModalContentSelect1'>File type</label>
                                <select className='form-control' id='LoadModalContentSelect1' name='fileType' value={this.state.fileType} onChange={this.handleChange}>
                                    <option value='json'>.json</option>
                                    <option value='xml'>.xml</option>
                                </select>
                            </div>
                        </div>
                        <div className='modal-footer'>
                            <button type='button' className='btn btn-secondary' data-dismiss='modal'>Cancel</button>
                            <button type='button' className='btn btn-primary' data-dismiss='modal'
                                onClick={() => this.props.modalCallback(this.state.fileType, this.state.text)}>
                                Load
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

}