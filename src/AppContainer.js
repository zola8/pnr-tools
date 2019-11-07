import React from 'react';
import MainNavbar from './views/navbar/main-navbar'
import PnrViewer from './views/pnr-viewer/pnr-viewer';
import SaveModal from './views/modal/save-modal';
import LoadModal from './views/modal/load-modal';
import rawpnr from './testdata/pnr.json';
import * as PnrOperations from './common/pnr-operations';
import { copyTextToClipboard } from './common/clipboard';
import { IsJsonString } from './common/json-operations';
import ShowAlerts from './views/alert/show-alerts';
import PnrEditor from './views/pnr-editor/pnr-editor';
import SelectLanguage from './views/i18n/select-language';
import * as i18nOperations from './i18n/i18n-operations';
import i18nContext from './i18n/i18n-context';

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

        this.navbarCallbacks = {
            isPnrEmpty: this.isPnrEmptyCallback,
            menuNewPnrCallback: this.menuNewPnrCallback,
            menuLogToBrowserCallback: this.menuLogToBrowserCallback,
            increaseCrsVersionNumberCallback: this.increaseCrsVersionNumberCallback,
            addEotOriginatorCallback: this.addEotOriginatorCallback,
            addRespoCallback: this.addRespoCallback,
            addGroupCallback: this.addGroupCallback,
            addTourCodeCallback: this.addTourCodeCallback,
            clearPnrKeysCallback: this.clearPnrKeysCallback,
            clearNamesCallback: this.clearNamesCallback,
            clearSegmentsCallback: this.clearSegmentsCallback,
            clearOsisCallback: this.clearOsisCallback,
            clearRemarksCallback: this.clearRemarksCallback,
            clearContactsCallback: this.clearContactsCallback,
            clearAddressesCallback: this.clearAddressesCallback,
            clearSsrsCallback: this.clearSsrsCallback,
            clearSksCallback: this.clearSksCallback,
            clearTicketsCallback: this.clearTicketsCallback,
            clearFormOfPaymentsCallback: this.clearFormOfPaymentsCallback,
            clearDcsDataListCallback: this.clearDcsDataListCallback
        };

        this.pnrEditorCallbacks = {
            updatePnrValue: this.updatePnrValue
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

                        <PnrEditor
                            data={this.state.pnr}
                            {...this.pnrEditorCallbacks}
                        />

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

    updatePnrValue = (attributeName, newValue) => {
        // TODO controlled-uncontrolled value error -- VS -- save button and builders?
        let pnr = this.state.pnr;
        pnr[attributeName] = newValue;

        this.setState({ pnr: pnr });
    }

    isPnrEmptyCallback = () => {
        return this.state.pnr == null ? true : false;
    }

    menuLogToBrowserCallback = () => {
        console.log('pnr: ', this.state.pnr);
    }

    menuNewPnrCallback = () => {
        this.setState({
            pnr: PnrOperations.buildPnr({ 'crsVersionNumber': 1 }),
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

    addEotOriginatorCallback = () => {
        let pnr = this.state.pnr;
        pnr.eotOriginator = PnrOperations.buildEotOriginator({});

        this.setState({ pnr: pnr });
    }

    addRespoCallback = () => {
        let pnr = this.state.pnr;
        pnr.respo = PnrOperations.buildRespo({});

        this.setState({ pnr: pnr });
    }

    addGroupCallback = () => {
        let pnr = this.state.pnr;
        pnr.group = PnrOperations.buildGroup({});

        this.setState({ pnr: pnr });
    }

    addTourCodeCallback = () => {
        let pnr = this.state.pnr;
        pnr.tourCode = PnrOperations.buildTourCode({});

        this.setState({ pnr: pnr });
    }

    clearPnrKeysCallback = () => {
        let pnr = this.state.pnr;
        pnr.pnrKeys = PnrOperations.buildPnrKeys(null);

        this.setState({ pnr: pnr });
    }

    clearNamesCallback = () => {
        let pnr = this.state.pnr;
        pnr.names = PnrOperations.buildNames(null);

        this.setState({ pnr: pnr });
    }

    clearSegmentsCallback = () => {
        let pnr = this.state.pnr;
        pnr.segments = PnrOperations.buildSegments(null);

        this.setState({ pnr: pnr });
    }

    clearOsisCallback = () => {
        let pnr = this.state.pnr;
        pnr.osis = PnrOperations.buildOsis(null);

        this.setState({ pnr: pnr });
    }

    clearRemarksCallback = () => {
        let pnr = this.state.pnr;
        pnr.remarks = PnrOperations.buildRemarks(null);

        this.setState({ pnr: pnr });
    }

    clearContactsCallback = () => {
        let pnr = this.state.pnr;
        pnr.contacts = PnrOperations.buildContacts(null);

        this.setState({ pnr: pnr });
    }

    clearAddressesCallback = () => {
        let pnr = this.state.pnr;
        pnr.addresses = PnrOperations.buildAddresses(null);

        this.setState({ pnr: pnr });
    }

    clearSsrsCallback = () => {
        let pnr = this.state.pnr;
        pnr.ssrs = PnrOperations.buildSsrs(null);

        this.setState({ pnr: pnr });
    }

    clearSksCallback = () => {
        let pnr = this.state.pnr;
        pnr.sks = PnrOperations.buildSks(null);

        this.setState({ pnr: pnr });
    }

    clearTicketsCallback = () => {
        let pnr = this.state.pnr;
        pnr.tickets = PnrOperations.buildTickets(null);

        this.setState({ pnr: pnr });
    }

    clearFormOfPaymentsCallback = () => {
        let pnr = this.state.pnr;
        pnr.formOfPayments = PnrOperations.buildFormOfPayments(null);

        this.setState({ pnr: pnr });
    }

    clearDcsDataListCallback = () => {
        let pnr = this.state.pnr;
        pnr.dcsDataList = PnrOperations.buildDcsDataList(null);

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
