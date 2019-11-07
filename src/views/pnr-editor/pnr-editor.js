import React from 'react';
import FormGroup from './form-group';
import GeneralTextInput from './general-text-input';
import i18nContext from '../../i18n/i18n-context';

export default class PnrEditor extends React.Component {

    constructor() {
        super();

        this.savePnrBodyClick = this.savePnrBodyClick.bind(this);
        this.pnrBodyAttributes = ["crsId", "recordLocator", "creationDate", "eotDate", "commencePoint", "nonCommercial", "canceled", "operating", "crsVersionNumber"];
    }

    render() {
        return (
            <div>
                {this.props.data && this.pnrBodyEditor()}
            </div>
        )
    }

    pnrBodyEditor = () => {
        return (
            <i18nContext.Consumer>
                {i18n => (
                    <div>
                        <FormGroup header="PNR body" border="border-info" headerbg="bg-info">
                            {
                                this.pnrBodyAttributes.map((item, i) =>
                                    <GeneralTextInput key={'PnrEditor_' + item + '_' + i}
                                        oneline
                                        label={item}
                                        data={this.props.data[item]}
                                        updatePnrValue={this.props.updatePnrValue}
                                    />
                                )
                            }
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