import React from 'react';

class AllotmentCheckbox extends React.Component {

    render() {
        return (

            <div className="form-group row">
                <label htmlFor="AllotmentCheckbox0" className="col-sm-2 col-form-label">Allotment</label>
                <div className="col-sm-4">
                <input className="form-check-input" type="checkbox" value="" id="AllotmentCheckbox0" />
                </div>
            </div>

        );
    }
}

export default AllotmentCheckbox;
