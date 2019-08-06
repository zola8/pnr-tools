import React from 'react';

class RecordLocatorInput extends React.Component {

    render() {
        return (

            <div className="form-group row">
                <label htmlFor="RecordLocatorInput0" className="col-sm-2 col-form-label">Record locator</label>
                <div className="col-sm-4">
                    <input className="form-control" id="RecordLocatorInput0" />
                </div>
            </div>

        );
    }
}

export default RecordLocatorInput;
