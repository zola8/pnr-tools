import React from 'react';
import MainNavbar from './views/navbar/main-navbar'
import ShowPnr from './views/show-pnr/show-pnr';
import SaveModal from './views/modals/save-modal';
import LoadModal from './views/modals/load-modal';
import rawpnr from './testdata/pnr.json';
import { buildPnr } from './common/pnr-operations'

export default class AppContainer extends React.Component {

    constructor() {
        super();

        this.state = {
            pnr: null
        }
    }

    render() {
        return (
            <div className="App">
                <MainNavbar
                    pnr={this.state.pnr}
                    menuNewCallback={() => this.setState({ pnr: null })}
                />
                <main role="main" className="container">
                    <ShowPnr
                        data={this.state.pnr}
                    />

                    <SaveModal modalCallback={this.menuSaveAsCallback} />
                    <LoadModal modalCallback={this.menuLoadFromCallback} />
                </main>
            </div>
        );
    }

    menuLoadFromCallback = () => {
        console.log("--- menuLoadFromCallback.... ");
        //loadJsonPnr={() => this.setState({ pnr: buildPnr(rawpnr) })}
    }

    menuSaveAsCallback = (fileType, minified) => {
        console.log("--- menuSaveAsCallback.... ", fileType, minified);
        //saveJsonToBrowser(this.props.pnr);
        //saveXmlToBrowser(this.props.pnr);
    }

}
