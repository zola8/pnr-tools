import React from 'react';
import { saveJsonToBrowser, saveXmlToBrowser } from './pnr-file-operations'

export default class MainNavbar extends React.Component {

    constructor(props) {
        super(props);
        this.menuNew = this.menuNew.bind(this);
        this.menuLoadAs = this.menuLoadAs.bind(this);
        this.menuSaveAs = this.menuSaveAs.bind(this);
        this.menuLogToBrowser = this.menuLogToBrowser.bind(this);
    }

    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                <a className="navbar-brand" href="/#">PNR Tools</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsMain" aria-controls="navbarsMain" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div>
                    <div className="btn-group ml-3" role="group">
                        <button id="btnGroupDropPnr" type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            PNR
                        </button>
                        <div className="dropdown-menu" aria-labelledby="btnGroupDropPnr">
                            <a className="dropdown-item" href="/#" onClick={() => this.props.setNewPnr()}>New</a>
                            <a className="dropdown-item" href="/#" onClick={this.menuLoadAs}>Load...</a>
                            <a className="dropdown-item" href="/#" onClick={this.menuSaveAs}>Save as...</a>
                            <a className="dropdown-item" href="/#" onClick={this.menuLogToBrowser}>Log to browser</a>
                        </div>
                    </div>

                    <div className="btn-group ml-3" role="group">
                        <button id="btnGroupDropLoad" type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Load...
                        </button>
                        <div className="dropdown-menu" aria-labelledby="btnGroupDropLoad">
                            <a className="dropdown-item" href="/#" data-toggle="modal" data-target="#exampleModalLong">call modal</a>
                        </div>
                    </div>

                </div>
            </nav>
        );
    }

    menuNew = () => {
        console.log("--- new menu ");
    }

    menuLoadAs = () => {
        console.log("--- load as... ");
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
