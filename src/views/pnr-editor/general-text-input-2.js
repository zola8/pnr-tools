import React from 'react';

export default class GeneralTextInput2 extends React.Component {

    render() {
        return (
            <div className="form-group">
                <label htmlFor={this.props.elementid}>{this.props.label}</label>

                <input type="text" className="form-control" id={this.props.elementid}
                    placeholder={this.props.placeholder}
                    value={this.props.data}
                    onChange={evt => this.props.updatePnrValue(this.props.label, evt.target.value)}
                />

                {this.props.small && (<small className="form-text text-muted">{this.props.small}</small>)}
            </div>
        )
    }

}