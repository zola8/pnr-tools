import React from 'react';

export default class SaveModal extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            fileType: 'json',
            minified: false
        }

        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    render() {

        return (
            <div className="modal fade" id="saveModal" tabIndex="-1" role="dialog" aria-labelledby="saveModalTitle" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="saveModalTitle">
                                Save as...
                            </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label htmlFor="SaveModalContentSelect1">File type</label>
                                <select className="form-control" id="SaveModalContentSelect1" name="fileType" value={this.state.fileType} onChange={this.handleChange}>
                                    <option value="json">.json</option>
                                    <option value="xml">.xml</option>
                                </select>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" checked={this.state.minified} onChange={this.handleCheckboxChange} id="SaveModalContentCheck1" />
                                <label className="form-check-label" htmlFor="SaveModalContentCheck1">
                                    Minified
                                </label>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal"
                                onClick={() => this.props.modalCallback(this.state.fileType, this.state.minified)}>
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    handleCheckboxChange = event =>
        this.setState({ minified: event.target.checked })

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

}