import React from 'react';
import pnr from '../../App-data';

class MainNavbar extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                <a className="navbar-brand" href="#">PNR Tools</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsMain" aria-controls="navbarsMain" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div>
                    <button className="btn btn-primary" onClick={ this.logPnr.bind(this) }>
                        log pnr
                    </button>
                </div>
            </nav>
        );
    }

    logPnr(e) {
        console.log("-- pnr: ", pnr);
    };

}

export default MainNavbar;
