import React from 'react';

export default class GeneralTextInput1 extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="mb-2 col-3">
                    <label htmlFor={this.props.elementid} className="mb-2">{this.props.label}</label>
                </div>
                <div className="mx-sm-3 mb-2 col">
                    <input type="text" className="form-control" id={this.props.elementid}
                        placeholder={this.props.placeholder}
                        value={this.props.data}
                        onChange={evt => this.props.updateInputValue(this.props.label, evt.target.value)}
                    />
                </div>
            </div>
        )
    }

}