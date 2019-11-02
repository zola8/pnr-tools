import React from 'react';
import FormGroup from './form-group';
import GeneralTextInput from './general-text-input';

export default class PnrEditor extends React.Component {

    constructor() {
        super();

        this.savePnrBodyClick = this.savePnrBodyClick.bind(this);
    }

    render() {
        return (
            <div>
                {this.pnrBodyEditor()}
            </div>
        )
    }

    pnrBodyEditor = () => {
        return (
            <div>
                <FormGroup header="PNR body" border="border-info" headerbg="bg-info">
                    <GeneralTextInput label="crsId" oneline />
                    <GeneralTextInput label="recordLocator" oneline />
                    <GeneralTextInput label="creationDate" oneline />
                    <GeneralTextInput label="eotDate" oneline />
                    <GeneralTextInput label="commencePoint" oneline />
                    <GeneralTextInput label="nonCommercial" oneline />
                    <GeneralTextInput label="canceled" oneline />
                    <GeneralTextInput label="operating" oneline />
                    <GeneralTextInput label="crsVersionNumber" oneline />
                </FormGroup>

                <div className="d-flex flex-row-reverse my-4 mr-3">
                    <button type="button" className="btn btn-primary" onClick={this.savePnrBodyClick}>Save</button>
                </div>
            </div>
        )
    }

    savePnrBodyClick = () => {
        console.log('save....');
    }

}