import React from 'react';

export default class Alert extends React.Component {

    render() {
        return (
            <div className="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>Invalid json format!</strong> Load failed.
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        )
    }


}