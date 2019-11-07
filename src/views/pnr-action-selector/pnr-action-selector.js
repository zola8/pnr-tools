import React from 'react';

export default class PnrActionSelector extends React.Component {

    render() {
        return (
            <div>
                {this.getContent()}
            </div>
        )
    }

    getContent() {
        if (this.props.data == null) {
            return this.getNullPnrContent();
        }
    }

    getNullPnrContent() {
        return (
            <div className="row card my-2">
                <div className="card-body">
                    <h5 className="card-title">Action selector</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className="my-2">
                        <button type="button" className="btn btn-info" data-toggle="button" aria-pressed="false" autoComplete="off">
                            Create new PNR
                        </button>
                    </div>
                    <div>
                        <button type="button" className="btn btn-info" data-toggle="button" aria-pressed="false" autoComplete="off">
                            Load PNR...
                        </button>
                    </div>

                </div>
            </div>
        );
    }

}
