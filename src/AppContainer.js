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

        this.loadJsonPnr(this.state);
    }

    render() {
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

    loadJsonPnr = (state) => {
        state.pnr = this.buildPnr(rawpnr);
        state.pnrinfo = pnrinfo;
    }

    buildPnr = (rawpnr) => {
        let result = {
            body: {
                "crsId": rawpnr.crsId,
                "recordLocator": rawpnr.recordLocator,
                "creationDate": rawpnr.creationDate,
                "eotDate": rawpnr.eotDate,
                "commencePoint": rawpnr.commencePoint,
                "nonCommercial": rawpnr.nonCommercial,
                "canceled": rawpnr.canceled,
                "operating": rawpnr.operating,
                "crsVersionNumber": rawpnr.crsVersionNumber
            }
        }

        result.pnrKeys = [];

        if (rawpnr.pnrKeys) {
            rawpnr.pnrKeys.forEach(item => {
                let newItem = {
                    "fileKey": item.fileKey,
                    "crsId": item.crsId
                };

                result.pnrKeys.push(newItem);
            });
        }

        if (rawpnr.eotOriginator) {
            result.eotOriginator = {
                "eotAuthRequest": rawpnr.eotOriginator.eotAuthRequest,
                "eotCity": rawpnr.eotOriginator.eotCity,
                "eotCountry": rawpnr.eotOriginator.eotCountry,
                "eotCrs": rawpnr.eotOriginator.eotCrs,
                "eotIataNumber": rawpnr.eotOriginator.eotIataNumber,
                "eotInHouse": rawpnr.eotOriginator.eotInHouse,
                "eotOffice": rawpnr.eotOriginator.eotOffice,
                "eotOrigType": rawpnr.eotOriginator.eotOrigType
            };
        }

        if (rawpnr.respo) {
            result.respo = {
                "pccIataNumber": rawpnr.respo.pccIataNumber,
                "posCity": rawpnr.respo.posCity,
                "posCountry": rawpnr.respo.posCountry,
                "posCrs": rawpnr.respo.posCrs,
                "respoOffice": rawpnr.respo.respoOffice
            }
        }

        if (rawpnr.group) {
            result.group = {
                "groupName": rawpnr.group.groupName,
                "groupCount": rawpnr.group.groupCount,
                "numberOfNames": rawpnr.group.numberOfNames,
                "groupFields": []
            }

            if (rawpnr.group.groupFields) {
                rawpnr.group.groupFields.forEach(item => {
                    let newItem = {
                        "groupFieldText": item.groupFieldText,
                        "groupFieldType": item.groupFieldType
                    };

                    result.group.groupFields.push(newItem);
                });
            }
        }

        return result;
    }

}
