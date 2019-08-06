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

            <div>
                <a className="nav-link dropdown-toggle" href="#" id="dropdown02" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Save as...</a>
                <div className="dropdown-menu" aria-labelledby="dropdown02">
                    <a className="dropdown-item" href="#" onClick={this.saveAsClick}>JSON</a>
                </div>
            </div>

        );
    }
}

export default SaveAsButton;
