import React from 'react';
import GeneralInput from '../../components/general-input'
import p  from '../../App-data-pnr'

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
                    <GeneralInput label="crsId" data={this.state.pnr.crsId} 
                        onChange={(e) => this.handleChange('crsId', e.target.value)} />
                    <GeneralInput label="alma" data={this.state.pnr.alma} onChange={this.handleChange.bind(this)} />


                </div>
            </div>

        );
    }

    handleChange(label, value) {
        pnr[label] = value;
    }

}

export default PnrEditor;
