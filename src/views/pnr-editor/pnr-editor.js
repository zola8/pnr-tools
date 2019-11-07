import React from 'react';
import FormGroup from './form-group';
import GeneralTextInput from './general-text-input';
import i18nContext from '../../i18n/i18n-context';

export default class PnrEditor extends React.Component {

    constructor() {
        super();

        this.savePnrBodyClick = this.savePnrBodyClick.bind(this);
    }

    render() {

        console.log(this.props.data);

        return (
            <div>
                {this.pnrBodyEditor()}
            </div>
        )
    }

    pnrBodyEditor = () => {
        // tombbe stringkent az attr-ok, majd map-en iteralni az inputoknal
        
        return (
            <i18nContext.Consumer>
                {i18n => (
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
                            <GeneralTextInput label="crsVersionNumber" updatePnr={this.props.updatePnr} oneline />
                        </FormGroup>

                        <div className="d-flex flex-row-reverse my-4 mr-3">
                            <button type="button" className="btn btn-primary" onClick={this.savePnrBodyClick}>
                                {i18n.save}
                            </button>
                        </div>
                    </div>
                )}
            </i18nContext.Consumer>
        )
    }

    savePnrBodyClick = () => {
        console.log('save....');
    }

}