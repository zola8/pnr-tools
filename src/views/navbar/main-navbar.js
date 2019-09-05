import React from 'react';
import { saveJsonToBrowser, saveXmlToBrowser } from '../../common/pnr-operations'

export default class MainNavbar extends React.Component {

    constructor(props) {
        super(props);
        this.menuSaveAs = this.menuSaveAs.bind(this);
        this.menuLogToBrowser = this.menuLogToBrowser.bind(this);
    }

    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                <a className="navbar-brand" href="/#">PNR Tools</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMain" aria-controls="navbarMain" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarMain">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Operations
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown1">
                                <a className="dropdown-item" href="/#" onClick={() => this.props.setNewPnr()}>New</a>
                                <a className="dropdown-item" href="/#" onClick={() => this.props.loadJsonPnr()}>Load...</a>
                                <a className="dropdown-item" href="/#" onClick={this.menuSaveAs}>Save as...</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/#" onClick={this.menuLogToBrowser}>Log to browser</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Actions
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown2">
                                <a className="dropdown-item" href="/#" >Add segment....</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }

    menuSaveAs = () => {
        console.log("--- save as... ");

        //saveJsonToBrowser(this.props.pnr);
        //saveXmlToBrowser(this.props.pnr);
    }

    menuLogToBrowser = () => {
        console.log("pnr: ", this.props.pnr);
    }

}
