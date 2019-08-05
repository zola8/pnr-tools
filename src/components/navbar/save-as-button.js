import React from 'react';
import pnr from '../../App-data'

class SaveAsButton extends React.Component {

    saveAsClick(e) {
        e.preventDefault();
        console.log('save pnr: ', pnr);
        console.log(JSON.stringify(pnr));
    }

    render() {
        return (

            <div className="btn-group" role="group">
                <button id="btnGroupDrop1" type="button" className="btn btn-outline-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Save as...
                </button>
                <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                    <a className="dropdown-item" href="#" onClick={this.saveAsClick}>JSON</a>
                </div>
            </div>

        );
    }
}

export default SaveAsButton;
