import React from 'react';
import MainNavbar from './views/navbar/main-navbar'
import ShowPnr from './views/show-pnr/show-pnr';
import SaveModal from './views/modals/save-modal';
import LoadModal from './views/modals/load-modal';
import rawpnr from './testdata/pnr.json';
import { buildPnr, saveJsonToBrowser, saveXmlToBrowser } from './common/pnr-operations'
import { copyTextToClipboard } from './common/clipboard'

export default class AppContainer extends React.Component {

    constructor() {
        super();

        this.state = {
            pnr: null
        }

        this.menuLogToBrowserCallback = this.menuLogToBrowserCallback.bind(this);
        this.menuLoadFromCallback = this.menuLoadFromCallback.bind(this);
        this.menuSaveAsCallback = this.menuSaveAsCallback.bind(this);
    }

    render() {
        return (
            <div className='App'>
                <MainNavbar
                    isPnrEmpty={this.state.pnr ? true : false}
                    menuNewCallback={() => this.setState({ pnr: null })}
                    menuLogToBrowserCallback={this.menuLogToBrowserCallback}
                />
                <main role='main' className='container'>
                    <ShowPnr
                        data={this.state.pnr}
                    />

                    <SaveModal modalCallback={this.menuSaveAsCallback} />
                    <LoadModal modalCallback={this.menuLoadFromCallback} />
                </main>
            </div>
        );
    }

    menuLogToBrowserCallback = () => {
        console.log('pnr: ', this.state.pnr);
    }

    menuLoadFromCallback = (fileType, text) => {

        console.log(fileType, text);

        this.setState({ pnr: buildPnr(rawpnr) });
    }

    menuSaveAsCallback = (fileType, copyToClipboard) => {
        if (copyToClipboard) {
            copyTextToClipboard(JSON.stringify(this.state.pnr));
        }

        if (fileType === 'json') {
            saveJsonToBrowser(this.state.pnr);
        } else if (fileType === 'xml') {
            saveXmlToBrowser(this.state.pnr);
        }
    }

}
