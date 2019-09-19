import React from 'react';
import MainNavbar from './views/navbar/main-navbar'
import ShowPnr from './views/show-pnr/show-pnr';
import SaveModal from './views/modal/save-modal';
import LoadModal from './views/modal/load-modal';
import rawpnr from './testdata/pnr.json';
import { buildPnr, saveJsonToBrowser, saveXmlToBrowser } from './common/pnr-operations'
import { copyTextToClipboard } from './common/clipboard'
import { IsJsonString } from './common/json-operations'
import ShowAlerts from './views/alert/show-alerts'

export default class AppContainer extends React.Component {

    constructor() {
        super();

        this.state = {
            pnr: null,
            alerts: []
        }

        this.menuLogToBrowserCallback = this.menuLogToBrowserCallback.bind(this);
        this.menuLoadFromCallback = this.menuLoadFromCallback.bind(this);
        this.menuSaveAsCallback = this.menuSaveAsCallback.bind(this);
        this.createAlert = this.createAlert.bind(this);
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
                    <ShowAlerts 
                        data={this.state.alerts}
                    />
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
        if (fileType === 'json') {
            if (IsJsonString(text)) {
                this.setState({ pnr: buildPnr(text) });
            } else {
                this.createAlert('danger', 'Invalid json format!', text.substring(0, 100) + "...");
            }
        } else if (fileType === 'xml') {
            // TODO load from xml
            console.log(fileType, text);
            this.setState({ pnr: buildPnr(rawpnr) });
        }
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

    createAlert = (type, header, message) => {
        let alert = {
            'type': type,
            'header': header,
            'message': message
        }

        this.setState({alerts: [...this.state.alerts, alert]});
    }

}
