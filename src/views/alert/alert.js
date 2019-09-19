import React from 'react';

export default class Alert extends React.Component {

    render() {
        return (
            <div className={'row alert alert-' + this.props.type + ' alert-dismissible fade show'} role="alert">
                <strong>{this.props.header} </strong> &nbsp;
                    {this.props.message}
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        )
    }


}