import React from 'react';
import FormGroup from './form-group';
import GeneralInput from './general-input';
import EmptyPnrPanel from '../pnr-viewer/empty-pnr-panel'

export default class PnrEditor extends React.Component {

    render() {

        console.log(this.props.data);

        return (
            <div>

                <FormGroup header="PNR body">
                    <GeneralInput label="crsId" oneline />
                    <GeneralInput label="recordLocator" oneline />
                    <GeneralInput label="creationDate" />
                    <GeneralInput label="eotDate" />
                    <GeneralInput label="commencePoint" />
                    <GeneralInput label="nonCommercial" />
                    <GeneralInput label="canceled" />
                    <GeneralInput label="operating" />
                    <GeneralInput label="crsVersionNumber" />
                </FormGroup>

                <EmptyPnrPanel />

            </div>
        )
    }

}