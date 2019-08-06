import React from 'react';

class CreationDateTimeInput extends React.Component {

    render() {
        return (

            <div className="form-group row">
                <label htmlFor="CreationDateTimeInput0" className="col-sm-2 col-form-label">Creation date-time</label>
                <div className="col-sm-4">
                    <input className="form-control" id="CreationDateTimeInput0" />
                </div>
            </div>

        );
    }
}

export default CreationDateTimeInput;
