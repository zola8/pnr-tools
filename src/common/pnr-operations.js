import jsontoxml from 'jsontoxml'

export function saveJsonToBrowser(pnr) {
    const jsonData = pnr;
    const fileData = JSON.stringify(jsonData);
    const blob = new Blob([fileData], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = 'pnr.json';
    link.href = url;
    link.click();
}

export function saveXmlToBrowser(pnr) {
    const xmlData = jsontoxml(pnr);
    const blob = new Blob([xmlData], { type: "text/xml" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = 'pnr.xml';
    link.href = url;
    link.click();
}

export function buildPnr(rawpnr) {
    if (!rawpnr) {
        rawpnr = {};
    }

    let result = buildPnrBody(rawpnr);

    if (rawpnr.pnrKeys) {
        result.pnrKeys = buildPnrKeys(rawpnr.pnrKeys);
    }

    if (rawpnr.eotOriginator) {
        result.eotOriginator = buildEotOriginator(rawpnr.eotOriginator);
    }

    if (rawpnr.respo) {
        result.respo = buildRespo(rawpnr.respo);
    }

    if (rawpnr.group) {
        result.group = buildGroup(rawpnr.group);
    }

    if (rawpnr.names) {
        result.names = buildNames(rawpnr.names);
    }

    if (rawpnr.segments) {
        result.segments = buildSegments(rawpnr.segments);
    }

    if (rawpnr.osis) {
        result.osis = buildOsis(rawpnr.osis);
    }

    if (rawpnr.remarks) {
        result.remarks = buildRemarks(rawpnr.remarks);
    }

    if (rawpnr.contacts) {
        result.contacts = buildContacts(rawpnr.contacts);
    }

    if (rawpnr.addresses) {
        result.addresses = buildAddresses(rawpnr.addresses);
    }

    if (rawpnr.ssrs) {
        result.ssrs = buildSsrs(rawpnr.ssrs);
    }

    if (rawpnr.sks) {
        result.sks = buildSks(rawpnr.sks);
    }

    if (rawpnr.tickets) {
        result.tickets = buildTickets(rawpnr.tickets);
    }

    if (rawpnr.formOfPayments) {
        result.formOfPayments = buildFormOfPayments(rawpnr.formOfPayments);
    }

    if (rawpnr.dcsDataList) {
        result.dcsDataList = buildDcsDataList(rawpnr.dcsDataList);
    }

    if (rawpnr.tourCode) {
        result.tourCode = buildTourCode(rawpnr.tourCode);
    }

    return result;
}

export function buildPnrBody(rawpnr) {
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

    return result;
}

export function createEmptyPnrBody() {
    return buildPnrBody({
        "crsId": "",
        "recordLocator": "",
        "creationDate": "",
        "eotDate": "",
        "commencePoint": "",
        "nonCommercial": false,
        "canceled": false,
        "operating": false,
        "crsVersionNumber": 0
    });
}

export function buildPnrKeys(pnrKeys) {
    let result = [];

    if (pnrKeys) {
        pnrKeys.forEach(item => {
            let newItem = {
                "fileKey": item.fileKey,
                "crsId": item.crsId
            };

            result.push(newItem);
        });
    }

    return result;
}

export function buildEotOriginator(eotOriginator) {
    let result = null;

    if (eotOriginator) {
        result = {
            "eotAuthRequest": eotOriginator.eotAuthRequest,
            "eotCity": eotOriginator.eotCity,
            "eotCountry": eotOriginator.eotCountry,
            "eotCrs": eotOriginator.eotCrs,
            "eotIataNumber": eotOriginator.eotIataNumber,
            "eotInHouse": eotOriginator.eotInHouse,
            "eotOffice": eotOriginator.eotOffice,
            "eotOrigType": eotOriginator.eotOrigType
        };
    }

    return result;
}

export function buildRespo(respo) {
    let result = null;

    if (respo) {
        result = {
            "pccIataNumber": respo.pccIataNumber,
            "posCity": respo.posCity,
            "posCountry": respo.posCountry,
            "posCrs": respo.posCrs,
            "respoOffice": respo.respoOffice
        }
    }

    return result;
}

export function buildGroup(group) {
    let result = null;

    if (group) {
        result = {
            "groupName": group.groupName,
            "groupCount": group.groupCount,
            "numberOfNames": group.numberOfNames,
            "groupFields": []
        }

        if (group.groupFields) {
            group.groupFields.forEach(item => {
                let newItem = {
                    "groupFieldText": item.groupFieldText,
                    "groupFieldType": item.groupFieldType
                };

                result.groupFields.push(newItem);
            });
        }
    }

    return result;
}

export function buildNames(names) {
    let result = [];

    if (names) {
        names.forEach(item => {
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

            result.push(newItem);
        });
    }

    return result;
}

export function buildSegments(segments) {
    let result = [];

    if (segments) {
        segments.forEach(item => {
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

            result.push(newItem);
        });
    }

    return result;
}

export function buildOsis(osis) {
    let result = [];

    if (osis) {
        osis.forEach(item => {
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

            result.push(newItem);
        });
    }

    return result;
}

export function buildRemarks(remarks) {
    let result = [];

    if (remarks) {
        remarks.forEach(item => {
            let newItem = {
                "designatedOffice1": item.designatedOffice1,
                "designatedOffice2": item.designatedOffice2,
                "designatedOffice3": item.designatedOffice3,
                "extendFlag1": item.extendFlag1,
                "extendFlag2": item.extendFlag2,
                "extendFlag3": item.extendFlag3,
                "remarkCategory": item.remarkCategory,
                "remarkText": item.remarkText,
                "remarkType": item.remarkType,
                "writeFlag1": item.writeFlag1,
                "writeFlag2": item.writeFlag2,
                "writeFlag3": item.writeFlag3
            };

            if (item.paxTattoos) {
                newItem.paxTattoos = item.paxTattoos;
            }

            if (item.segmentTattoos) {
                newItem.segmentTattoos = item.segmentTattoos;
            }

            result.push(newItem);
        });
    }

    return result;
}

export function buildContacts(contacts) {
    let result = [];

    if (contacts) {
        contacts.forEach(item => {
            let newItem = {
                "contactText": item.contactText,
                "contactType": item.contactType
            };

            if (item.paxTattoos) {
                newItem.paxTattoos = item.paxTattoos;
            }

            result.push(newItem);
        });
    }

    return result;
}

export function buildAddresses(addresses) {
    let result = [];

    if (addresses) {
        addresses.forEach(item => {
            let newItem = {
                "addressType": item.addressType,
                "city": item.city,
                "company": item.company,
                "country": item.country,
                "name": item.name,
                "poBox": item.poBox,
                "state": item.state,
                "street1": item.street1,
                "street2": item.street2,
                "zipCode": item.zipCode
            };

            if (item.paxTattoos) {
                newItem.paxTattoos = item.paxTattoos;
            }

            result.push(newItem);
        });
    }

    return result;
}

export function buildSsrs(ssrs) {
    let result = [];

    if (ssrs) {
        ssrs.forEach(item => {
            let newItem = {
                "actionCode": item.actionCode,
                "airlineCode": item.airlineCode,
                "chargeable": item.chargeable,
                "requestQuantity": item.requestQuantity,
                "specialRequirementData": item.specialRequirementData,
                "ssrText": item.ssrText,
                "ssrType": item.ssrType
            };

            if (item.paxTattoos) {
                newItem.paxTattoos = item.paxTattoos;
            }

            if (item.segmentTattoos) {
                newItem.segmentTattoos = item.segmentTattoos;
            }

            result.push(newItem);
        });
    }

    return result;
}

export function buildSks(sks) {
    let result = [];

    if (sks) {
        sks.forEach(item => {
            let newItem = {
                "actionCode": item.actionCode,
                "airlineCode": item.airlineCode,
                "requestQuantity": item.requestQuantity,
                "skText": item.skText,
                "skType": item.skType
            };

            if (item.paxTattoos) {
                newItem.paxTattoos = item.paxTattoos;
            }

            if (item.segmentTattoos) {
                newItem.segmentTattoos = item.segmentTattoos;
            }

            result.push(newItem);
        });
    }

    return result;
}

export function buildTickets(tickets) {
    let result = [];

    if (tickets) {
        tickets.forEach(item => {
            let newItem = {
                "airlineNumber": item.airlineNumber,
                "amountString": item.amountString,
                "checkDigit": item.checkDigit,
                "confirmationNumber": item.confirmationNumber,
                "conjunctionNumber": item.conjunctionNumber,
                "couponNumbers": item.couponNumbers,
                "currency": item.currency,
                "documentNumber": item.documentNumber,
                "elementType": item.elementType,
                "freeText": item.freeText,
                "iataCode": item.iataCode,
                "issueCity": item.issueCity,
                "issueDate": item.issueDate,
                "issueEntry": item.issueEntry,
                "issueIndicator": item.issueIndicator,
                "issueOffice": item.issueOffice,
                "override": item.override,
                "paxType": item.paxType,
            };

            if (item.paxTattoos) {
                newItem.paxTattoos = item.paxTattoos;
            }

            if (item.segmentTattoos) {
                newItem.segmentTattoos = item.segmentTattoos;
            }

            if (item.ssrTattoos) {
                newItem.ssrTattoos = item.ssrTattoos;
            }

            result.push(newItem);
        });
    }

    return result;
}

export function buildFormOfPayments(formOfPayments) {
    let result = [];

    if (formOfPayments) {
        formOfPayments.forEach(item => {
            let newItem = {
                "amountString": item.amountString,
                "currency": item.currency,
                "fopText": item.fopText,
                "paxType": item.paxType,
                "type": item.type
            };

            if (item.paxTattoos) {
                newItem.paxTattoos = item.paxTattoos;
            }

            if (item.segmentTattoos) {
                newItem.segmentTattoos = item.segmentTattoos;
            }

            result.push(newItem);
        });
    }

    return result;
}

export function buildDcsDataList(dcsDataList) {
    let result = [];

    if (dcsDataList) {
        dcsDataList.forEach(item => {
            let newItem = {
                "acceptanceChannelId": item.acceptanceChannelId,
                "boardingStatus": item.boardingStatus,
                "cabinCode": item.cabinCode,
                "cabinRegradeType": item.cabinRegradeType,
                "cancellationReasonCode": item.cancellationReasonCode,
                "cancellationReasonDescription": item.cancellationReasonDescription,
                "customerAcceptanceStatus": item.customerAcceptanceStatus,
                "customerBaggageStatus": item.customerBaggageStatus,
                "customerRecordStatus": item.customerRecordStatus,
                "destination": item.destination,
                "origin": item.origin,
                "paxType": item.paxType,
                "seatNumber": item.seatNumber,
                "segmentTattoo": item.segmentTattoo
            };

            if (item.paxTattoos) {
                newItem.paxTattoos = item.paxTattoos;
            }

            result.push(newItem);
        });
    }

    return result;
}

export function buildTourCode(tourCode) {
    let result = {
        "freeText": tourCode.freeText
    }

    return result;
}

export function increaseCrsVersionNumber(pnr) {
    let crsVersionNumber = pnr.crsVersionNumber;
    crsVersionNumber++;

    pnr.crsVersionNumber = crsVersionNumber;
    return pnr;
}
