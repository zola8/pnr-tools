import React from 'react';
import i18nContext from '../../i18n/i18n-context';

export default class PnrActionSelector extends React.Component {

    render() {
        return (
            <div>
                {this.getContent()}
            </div>
        )
    }

    getContent() {
        if (this.props.data == null) {
            return this.getNullPnrContent();
        }
    }

    getNullPnrContent() {
        return (
            <i18nContext.Consumer>
                {i18n => (
                    <div className="row card my-2">
                        <div className="card-body">
                            <h5 className="card-title">{i18n.views.PnrActionSelector.header}</h5>
                            <p className="card-text">{i18n.views.PnrActionSelector.text}</p>
                            <div className="my-2">
                                <button type="button" className="btn btn-info" data-toggle="button" aria-pressed="false" autoComplete="off"
                                    onClick={this.props.menuNewPnrCallback}>
                                    {i18n.views.PnrActionSelector.new}
                                </button>
                            </div>
                            <div>
                                <button type="button" className="btn btn-info" aria-pressed="false" autoComplete="off" data-toggle='modal' data-target='#LoadModal'>
                                    {i18n.views.PnrActionSelector.load}
                                </button>
                            </div>

                        </div>
                    </div>
                )}
            </i18nContext.Consumer>
        );
    }

}
