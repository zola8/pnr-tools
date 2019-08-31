import React from 'react';
import jsontoxml from 'jsontoxml'

class MainNavbar extends React.Component {

    constructor(props) {
        super(props);
        this.saveJsonToBrowser = this.saveJsonToBrowser.bind(this);
        this.saveXmlToBrowser = this.saveXmlToBrowser.bind(this);
        this.logPnr = this.logPnr.bind(this);
    }

    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                <a className="navbar-brand" href="#">PNR Tools</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsMain" aria-controls="navbarsMain" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div>
                    <div className="btn-group ml-3" role="group">
                        <button id="btnGroupDropLoad" type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Load...
                        </button>
                        <div className="dropdown-menu" aria-labelledby="btnGroupDropLoad">
                            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#exampleModalLong">call modal</a>
                        </div>
                    </div>

                    <div className="btn-group ml-3" role="group">
                        <button id="btnGroupDropSave" type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Save as...
                        </button>
                        <div className="dropdown-menu" aria-labelledby="btnGroupDropSave">
                            <a className="dropdown-item" href="#" onClick={this.logPnr}>log internal pnr</a>
                            <a className="dropdown-item" href="#" onClick={this.saveJsonToBrowser}>.json</a>
                            <a className="dropdown-item" href="#" onClick={this.saveXmlToBrowser}>.xml</a>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }

    logPnr = () => {
        console.log("pnr: ", this.props.pnr);
    }

    saveJsonToBrowser = () => {
        const jsonData = this.props.pnr;
        const fileData = JSON.stringify(jsonData);
        const blob = new Blob([fileData], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = 'pnr.json';
        link.href = url;
        link.click();
    }

    saveXmlToBrowser = () => {
        const xmlData = jsontoxml(this.props.pnr);
        const blob = new Blob([xmlData], { type: "text/xml" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = 'pnr.xml';
        link.href = url;
        link.click();
    }

}

export default MainNavbar;
