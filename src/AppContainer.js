import React from 'react';
import MainNavbar from './views/navbar/main-navbar'
import rawpnr from './testdata/pnr2.json';
import pnrinfo from './testdata/pnrinfo.json';
import PnrViewer from './views/pnr-viewer/pnr-viewer';
import ShowPnr from './views/show-pnr/show-pnr';

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
                    <ShowPnr
                        data={this.state.pnr}
                    />

                    {/*
                    <PnrViewer
                        pnr={this.state.pnr}
                        pnrinfo={this.state.pnrinfo}
                    />
                    */}
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

        if (rawpnr.pnrKeys) {
            result.pnrKeys = [];

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

        if (rawpnr.names) {
            result.names = [];

            rawpnr.names.forEach(item => {
                let newItem = {
                    "dateOfBirth": item.dateOfBirth,
                    "firstName": item.firstName,
                    "gender": item.gender,
                    "infantDateOfBirth": item.infantDateOfBirth,
                    "infantFirstName": item.infantFirstName,
                    "infantGender": item.infantGender,
                    "infantLastName": item.infantLastName,
                    "infantRedressNo": item.infantRedressNo,
                    "lastName": item.lastName,
                    "paxType": item.paxType,
                    "redressNo": item.redressNo,
                    "title": item.title
                };

                result.names.push(newItem);
            });
        }

        if (rawpnr.segments) {
            result.segments = [];

            rawpnr.segments.forEach(item => {
                let newItem = {
                    "actionCode": item.actionCode,
                    "airlineCode": item.airlineCode,
                    "allotment": item.allotment,
                    "arnk": item.arnk,
                    "arrival": item.arrival,
                    "bookingClass": item.bookingClass,
                    "cabinClass": item.cabinClass,
                    "codeshare": item.codeshare,
                    "codeshareAirlineCode": item.codeshareAirlineCode,
                    "codeshareBookingClass": item.codeshareBookingClass,
                    "codeshareFlightNumber": item.codeshareFlightNumber,
                    "departure": item.departure,
                    "destination": item.destination,
                    "flightNumber": item.flightNumber,
                    "flightSuffix": item.flightSuffix,
                    "flown": item.flown,
                    "infoSegment": item.infoSegment,
                    "marriageGroup": item.marriageGroup,
                    "numberOfSeats": item.numberOfSeats,
                    "openSeg": item.openSeg,
                    "origin": item.origin,
                    "swissEBC": item.swissEBC
                };

                result.segments.push(newItem);
            });
        }

        if (rawpnr.osis) {
            result.osis = [];

            rawpnr.osis.forEach(item => {
                let newItem = {
                    "airlineCode": item.airlineCode,
                    "osiType": item.osiType,
                    "osiText": item.osiText
                };

                if (item.paxTattoos) {
                    newItem.paxTattoos = item.paxTattoos;
                }

                if (item.segmentTattoos) {
                    newItem.segmentTattoos = item.segmentTattoos;
                }

                result.osis.push(newItem);
            });
        }

        return result;
    }

}
