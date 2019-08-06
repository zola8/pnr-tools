import React from 'react';
import pnr from '../../App-data'

class LoadAsButton extends React.Component {

    render() {
        return (

            <div>
                <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Load from...</a>
                <div className="dropdown-menu" aria-labelledby="dropdown01">
                    <a className="dropdown-item" href="#">JSON</a>
                </div>
            </div>

        );
    }
}

export default LoadAsButton;
