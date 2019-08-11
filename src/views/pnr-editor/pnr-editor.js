import React from 'react';
import GeneralInput from '../../components/general-input'
import pnr from '../../App-data-pnr'

class PnrEditor extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            pnr: pnr
        };

        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        return (

            <div className="row mt-3">
                <div className="col-md-12">
                    <GeneralInput label="crsId" data={this.state.pnr.crsId} onChange={this.handleChange.bind(this)} />


                </div>
            </div>

        );
    }

    handleChange(e) {
        this.setState({ pnr: e.target.value });
        console.log(this.state.pnr);
    }

}

export default PnrEditor;
