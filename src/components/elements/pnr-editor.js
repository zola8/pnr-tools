import React from 'react';
import CrsIdInput from './pnr/crs-id-input'
import RecordLocatorInput from './pnr/record-locator-input'
import CreationDateInput from './pnr/creation-date-input'
import CreationDateTimeInput from './pnr/creation-date-time-input'
import CommencePointInput from './pnr/commence-point-input'
import NonCommercialCheckbox from './pnr/non-commercial-checkbox'
import CanceledCheckbox from './pnr/canceled-checkbox'
import OperatingCheckbox from './pnr/operating-checkbox'
import AllotmentCheckbox from './pnr/allotment-checkbox'
import ORespOffInput from './pnr/o-resp-off-input'
import OPosCntyInput from './pnr/o-pos-cnty-input'
import OPosCityInput from './pnr/o-pos-city-input'
import OPosCrsInput from './pnr/o-pos-crs-input'
import LastArrivalUTCInput from './pnr/last-arrival-utc-input'
import ExtendedLastArrivalUTCInput from './pnr/extended-last-arrival-utc-input'
import FirstDepartureUTCInput from './pnr/first-departure-utc-input'
import ExtendedFirstDepartureUTCInput from './pnr/extended-first-departure-utc-input'

class PnrEditor extends React.Component {

    render() {
        return (

            <div>
                <CrsIdInput />
                <RecordLocatorInput />
                <CreationDateInput />
                <CreationDateTimeInput />
                <CommencePointInput />
                <NonCommercialCheckbox />
                <CanceledCheckbox />
                <OperatingCheckbox />
                <AllotmentCheckbox />
                <ORespOffInput />
                <OPosCntyInput />
                <OPosCityInput />
                <OPosCrsInput />
                <LastArrivalUTCInput />
                <ExtendedLastArrivalUTCInput />
                <FirstDepartureUTCInput />
                <ExtendedFirstDepartureUTCInput />
            </div>

        );
    }
}

export default PnrEditor;
