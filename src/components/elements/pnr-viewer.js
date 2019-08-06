import React from 'react';
import CrsIdInput from './main/crs-id-input'
import RecordLocatorInput from './main/record-locator-input'

class PnrViewer extends React.Component {

    render() {
        return (

            <div>
                <CrsIdInput />
                <RecordLocatorInput />
            </div>

        );
    }
}

export default PnrViewer;
