import React from 'react';
import MainNavbar from './views/navbar/main-navbar'
import rawpnr from './testdata/pnr.json';
import pnrinfo from './testdata/pnrinfo.json';
import PnrViewer from './views/pnr-viewer/pnr-viewer';

export default class AppContainer extends React.Component {

    constructor() {
        super();

        this.state = {
            pnr: null,
            pnrinfo: null
        }

        this.loadPnr(this.state);
    }

    render() {
        console.log("pnr: ", this.state.pnr);
        console.log("pnrinfo: ", this.state.pnrinfo);

        return (
            <div className="App">
                <MainNavbar pnr={this.state.pnr} />
                <main role="main" className="container">
                    <PnrViewer
                        pnr={this.state.pnr}
                        pnrinfo={this.state.pnrinfo}
                    />
                </main>
            </div>
        );
    }

    loadPnr = (state) => {
        state.pnr = this.buildPnrBody(rawpnr);
        state.pnrinfo = pnrinfo;
    }

    buildPnrBody = (rawpnr) => {
        let result = {
            body: {
                "crsId": rawpnr.crsId,
                "recordLocator": rawpnr.recordLocator,
                "creationDate": rawpnr.creationDate,
                "creationDateTime": rawpnr.creationDateTime,
                "commencePoint": rawpnr.commencePoint,
                "nonCommercial": rawpnr.nonCommercial,
                "canceled": rawpnr.canceled,
                "operating": rawpnr.operating,
                "allotment": rawpnr.allotment,
                "oRespOff": rawpnr.oRespOff,
                "oPosCnty": rawpnr.oPosCnty,
                "oPosCity": rawpnr.oPosCity,
                "oPosCrs": rawpnr.oPosCrs,
                "lastArrivalUTC": rawpnr.lastArrivalUTC,
                "extendedLastArrivalUTC": rawpnr.extendedLastArrivalUTC,
                "firstDepartureUTC": rawpnr.firstDepartureUTC,
                "extendedFirstDepartureUTC": rawpnr.extendedFirstDepartureUTC,
                "eotDate": rawpnr.eotDate,
                "crsVersionNumber": rawpnr.crsVersionNumber,
            }
        }

        return result;
    }

}
