import React from 'react';

export default class GeneralInput extends React.Component {

    render() {
        console.log(this.props.updatePnr);
        return (
            <div>
                {
                    this.props.oneline ? this.getOneLineForm() : this.getTwoLinesForm()
                }
            </div>
        )
    }

    getTwoLinesForm = () => {
        return (
            <div className="form-group">
                <label htmlFor={this.props.elementid}>{this.props.label}</label>

                <input type="text" className="form-control" id={this.props.elementid}
                    placeholder={this.props.placeholder}
                />

                {this.props.small && (<small className="form-text text-muted">{this.props.small}</small>)}
            </div>
        )
    }

    getOneLineForm = () => {
        return (
            <div className="row">
                <div className="mb-2 col-3">
                    <label htmlFor={this.props.elementid} className="mb-2">{this.props.label}</label>
                </div>
                <div className="mx-sm-3 mb-2 col">
                    <input type="text" className="form-control" id={this.props.elementid}
                        placeholder={this.props.placeholder}
                    />
                </div>
            </div>
        )
    }

}