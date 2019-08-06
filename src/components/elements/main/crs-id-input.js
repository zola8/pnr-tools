import React from 'react';

class CrsIdInput extends React.Component {

    render() {
        return (

            <div className="form-group row">
                <label htmlFor="crsIdInput" className="col-sm-2 col-form-label">CRS ID</label>
                <div className="col-sm-10">
                    <input className="form-control" id="crsIdInput" />
                </div>
            </div>

        );
    }
}

export default CrsIdInput;
