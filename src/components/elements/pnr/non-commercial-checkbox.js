import React from 'react';

class NonCommercialCheckbox extends React.Component {

    render() {
        return (

            <div className="form-group row">
                <label htmlFor="NonCommercialCheckbox0" className="col-sm-2 col-form-label">Non-commercial</label>
                <div className="col-sm-4">
                <input className="form-check-input" type="checkbox" value="" id="NonCommercialCheckbox0" />
                </div>
            </div>

        );
    }
}

export default NonCommercialCheckbox;
