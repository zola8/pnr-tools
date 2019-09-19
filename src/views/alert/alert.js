import React from 'react';

export default class Alert extends React.Component {

    render() {
        return (
            <div className={'alert alert-' + this.props.type + ' alert-dismissible fade show'} role="alert">
                <strong>{this.props.header} </strong> <br/>
                    {this.props.message}
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close" >
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        )
    }


}