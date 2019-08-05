import React from 'react';
import SaveAsButton from './save-as-button';

class MainNavbar extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                <a className="navbar-brand" href="#">PNR Generator</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsMain" aria-controls="navbarsMain" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsMain">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <SaveAsButton />
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default MainNavbar;
