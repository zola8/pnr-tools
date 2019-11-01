import React from 'react';

export default class DeleteButton extends React.Component {

    render() {
        return (
            <span className="close-icon float-right"
                onClick={() => this.props.removeElementCallback(this.props.removableElement)}
            >
            </span>
        );
    }

}
