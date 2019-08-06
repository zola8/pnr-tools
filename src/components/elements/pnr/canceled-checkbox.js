import React from 'react';

class CanceledCheckbox extends React.Component {

    render() {
        return (

            <div className="form-group row">
                <label htmlFor="CanceledCheckbox0" className="col-sm-2 col-form-label">Cancelled</label>
                <div className="col-sm-4">
                <input className="form-check-input" type="checkbox" value="" id="CanceledCheckbox0" />
                </div>
            </div>

        );
    }
}

export default CanceledCheckbox;
