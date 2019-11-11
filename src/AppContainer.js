import React from 'react';
import MainNavbar from './views/navbar/main-navbar'
import ShowAlerts from './views/alert/show-alerts'
import SaveModal from './views/modal/save-modal'
import LoadModal from './views/modal/load-modal'
import * as PnrOperations from './common/pnr-operations'
import { copyTextToClipboard } from './common/clipboard'
import { IsJsonString } from './common/json-operations'
import SelectLanguage from './views/i18n/select-language'
import * as i18nOperations from './i18n/i18n-operations'
import i18nContext from './i18n/i18n-context'
import rawpnr from './testdata/pnr.json'
import PnrViewer from './views/pnr-viewer/pnr-viewer'
import PnrEditor from './views/pnr-editor/pnr-editor'
import PnrActionSelector from './views/pnr-action-selector/pnr-action-selector'
import EmptyPnrPanel from './views/pnr-action-selector/empty-pnr-panel'

export default class AppContainer extends React.Component {

    constructor() {
        super();

        this.state = {
            pnr: null,
            alerts: [],
            i18n: {
                language: "en",
                dictionary: i18nOperations.getDictionary('en'),
                availableLanguages: i18nOperations.getAvailableLanguages()
            }
        }

        this.menuNewPnrCallback = this.menuNewPnrCallback.bind(this);
        this.menuLogToBrowserCallback = this.menuLogToBrowserCallback.bind(this);
        this.menuLoadFromCallback = this.menuLoadFromCallback.bind(this);
        this.menuSaveAsCallback = this.menuSaveAsCallback.bind(this);
        this.createAlert = this.createAlert.bind(this);
        this.addPnrElementCallback = this.addPnrElementCallback.bind(this);

        this.navbarCallbacks = {
            isPnrEmpty: this.isPnrEmptyCallback,
            menuNewPnrCallback: this.menuNewPnrCallback,
            menuLogToBrowserCallback: this.menuLogToBrowserCallback,
            increaseCrsVersionNumberCallback: this.increaseCrsVersionNumberCallback,
            addPnrElementCallback: this.addPnrElementCallback
        };

        this.pnrEditorCallbacks = {
        };
    }

    render() {
        return (
            <i18nContext.Provider value={this.state.i18n.dictionary}>
                <div className='App'>
                    <MainNavbar
                        {...this.navbarCallbacks}
                    />
                    <main role='main' className='container'>
                        <ShowAlerts
                            data={this.state.alerts}
                        />

                        <PnrActionSelector data={this.state.pnr} {...this.navbarCallbacks} />

                        {!this.state.pnr && <EmptyPnrPanel />}

                        {this.state.pnr &&
                            <PnrEditor
                                data={this.state.pnr}
                                {...this.pnrEditorCallbacks}
                            />
                        }

                        {/*
                        <PnrViewer
                            data={this.state.pnr}
                            removeElementCallback={this.removeElementCallback}
                        />
                        */}

                        <SaveModal modalCallback={this.menuSaveAsCallback} />
                        <LoadModal modalCallback={this.menuLoadFromCallback} />
                    </main>

                    <footer className="footer text-center p-3 border-top">
                        <SelectLanguage availableLanguages={this.state.i18n.availableLanguages}
                            setLanguage={this.setLanguage}
                        />
                    </footer>
                </div>
            </i18nContext.Provider>
        );
    }

    isPnrEmptyCallback = () => {
        return this.state.pnr == null ? true : false;
    }

    menuLogToBrowserCallback = () => {
        console.log('pnr: ', this.state.pnr);
    }

    menuNewPnrCallback = () => {
        this.setState({
            pnr: PnrOperations.buildPnr({ 'crsVersionNumber': 0 }),
            alerts: []
        });
    }

    menuLoadFromCallback = (fileType, text) => {
        if (fileType === 'json') {
            if (IsJsonString(text)) {
                this.setState({ pnr: PnrOperations.buildPnr(text) });
            } else {
                this.createAlert('danger', 'Invalid json format!', text.substring(0, 100) + "...");
            }
        } else if (fileType === 'xml') {
            // TODO load from xml
            console.log(fileType, text);
            this.setState({ pnr: PnrOperations.buildPnr(rawpnr) });
        }
    }

    menuSaveAsCallback = (fileType, copyToClipboard) => {
        let text = JSON.stringify(this.state.pnr);

        if (copyToClipboard) {
            copyTextToClipboard(text);
        }

        if (fileType === 'json') {
            PnrOperations.saveJsonToBrowser(text);
        } else if (fileType === 'xml') {
            PnrOperations.saveXmlToBrowser(text);
        }
    }

    createAlert = (type, header, message) => {
        let alert = {
            'type': type,
            'header': header,
            'message': message
        }

        this.setState({ alerts: [...this.state.alerts, alert] });
    }

    increaseCrsVersionNumberCallback = () => {
        let pnr = PnrOperations.increaseCrsVersionNumber(this.state.pnr);

        this.setState({ pnr: pnr });
    }

    addPnrElementCallback = (elementName, value) => {
        let pnr = this.state.pnr;
        pnr[elementName] = value;

        this.setState({ pnr: pnr });

    }

    removeElementCallback = (elementName) => {
        if (!elementName) {
            return;
        }

        let pnr = this.state.pnr;
        delete pnr[elementName];

        this.setState({ pnr: pnr });
    }

    setLanguage = (language) => {
        let i18n = this.state.i18n;
        i18n.language = language;

        for (var i = 0; i < i18n.availableLanguages.length; i++) {
            if (i18n.availableLanguages[i].code === language) {
                i18n.dictionary = i18n.availableLanguages[i].dictionary;
            }
        }

        this.setState({ i18n: i18n });
    }

}
