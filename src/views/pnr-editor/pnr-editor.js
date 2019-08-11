import React from 'react';
import GeneralInput from '../../components/general-input'
import pnr from '../../App-data-pnr'

class PnrEditor extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            pnr: pnr
        };
    }

    render() {
        return (

            <div>
                <GeneralInput label="crsId" id="crsId0" data={this.state.pnr.crsId} />
            </div>

        );
    }

}

export default PnrEditor;
