import React from 'react';

class AlmaInput extends React.Component {

    render() {
        return (

            <div className="form-group row">
                <label htmlFor="pnrMainAlma" className="col-sm-2 col-form-label">Alma</label>
                <div className="col-sm-10">
                    <input className="form-control" id="pnrMainAlma" />
                </div>
            </div>

        );
    }
}

export default AlmaInput;
