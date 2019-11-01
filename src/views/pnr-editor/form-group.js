import React from 'react';

export default class FormGroup extends React.Component {

    render() {
        return (
            <div className="row card border-info my-2">
                <div className="card-header bg-info pb-1">
                    <h5>{this.props.header}</h5>
                </div>
                <div className="card-body">
                    {this.props.children}
                </div>
            </div>
        )
    }

}
