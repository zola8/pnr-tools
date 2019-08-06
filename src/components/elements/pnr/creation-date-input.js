import React from 'react';

class CreationDateInput extends React.Component {

    render() {
        return (

            <div className="form-group row">
                <label htmlFor="CreationDateInput0" className="col-sm-2 col-form-label">Creation date</label>
                <div className="col-sm-4">
                    <input className="form-control" id="CreationDateInput0" />
                </div>
            </div>

        );
    }
}

export default CreationDateInput;
