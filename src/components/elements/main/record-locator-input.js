import React from 'react';

class RecordLocatorInput extends React.Component {

    render() {
        return (

            <div className="form-group row">
                <label htmlFor="recordLocatorInput" className="col-sm-2 col-form-label">Record locator</label>
                <div className="col-sm-10">
                    <input className="form-control" id="recordLocatorInput" />
                </div>
            </div>

        );
    }
}

export default RecordLocatorInput;
