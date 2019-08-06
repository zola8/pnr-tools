import React from 'react';

class OperatingCheckbox extends React.Component {

    render() {
        return (

            <div className="form-group row">
                <label htmlFor="OperatingCheckbox0" className="col-sm-2 col-form-label">Operating</label>
                <div className="col-sm-4">
                <input className="form-check-input" type="checkbox" value="" id="OperatingCheckbox0" />
                </div>
            </div>

        );
    }
}

export default OperatingCheckbox;
