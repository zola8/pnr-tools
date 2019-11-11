import React from 'react';
import FormGroup from './form-group';
import GeneralTextInput from './general-text-input-1';
import i18nContext from '../../i18n/i18n-context';
import * as PnrOperations from '../../common/pnr-operations';

export default class PnrEditor extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            newPnr: PnrOperations.createEmptyPnrBody()
        }

        this.savePnrBodyClick = this.savePnrBodyClick.bind(this);
        this.pnrBodyAttributes = ["crsId", "recordLocator", "creationDate", "eotDate", "commencePoint", "nonCommercial", "canceled", "operating", "crsVersionNumber"];
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
            <i18nContext.Consumer>
                {i18n => (
                    <div>
                        <FormGroup header="PNR body" border="border-info" headerbg="bg-info">
                            {
                                this.pnrBodyAttributes.map((item, i) =>
                                    <GeneralTextInput key={'PnrEditor_GeneralTextInput_' + i + '_' + item}
                                        label={item}
                                        data={this.state.newPnr[item]}
                                        updateInputValue={this.updateInputValue}
                                    />
                                )
                            }
                        </FormGroup>

                        <div className="d-flex flex-row-reverse my-4 mr-3">
                            <button type="button" className="btn btn-primary" onClick={this.savePnrBodyClick}>
                                {i18n.button.save}
                            </button>
                        </div>
                    </div>
                )}
            </i18nContext.Consumer>
        )
    }

    updateInputValue = (attributeName, newValue) => {
        let pnr = this.state.newPnr;
        pnr[attributeName] = newValue;

        this.setState({ newPnr: pnr });
    }

    savePnrBodyClick = () => {
        let pnr = PnrOperations.buildPnr(this.state.newPnr);

        console.log('save....', pnr);
    }

}