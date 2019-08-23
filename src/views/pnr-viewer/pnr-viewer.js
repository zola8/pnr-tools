import React from 'react';
import HideNull from './hide-null'
import PnrViewerKeys from './pnr-viewer-keys'
import PnrViewerSimpleGroup from './pnr-viewer-simple-group'

class PnrViewer extends React.Component {

    constructor() {
        super();

        this.state = {
            hideNulls: false
        }
    }

    render() {
        return (
            <div>
                <HideNull
                    shouldHideNulls={this.state.hideNulls}
                    setHideNulls={() => this.setState({ hideNulls: !this.state.hideNulls })}
                />

                <PnrViewerSimpleGroup
                    shouldHideNulls={this.state.hideNulls}
                    title="PNR"
                    keydata="pnrBody"
                    data={this.props.pnr.body}
                    pnrinfo={this.props.pnrinfo}
                />

                <PnrViewerKeys
                    shouldHideNulls={this.state.hideNulls}
                    data={this.props.pnr.pnrKeys}
                    pnrinfo={this.props.pnrinfo}
                />

                <PnrViewerSimpleGroup
                    shouldHideNulls={this.state.hideNulls}
                    title="EOT ORIGINATOR"
                    keydata="eotOriginator"
                    data={this.props.pnr.eotOriginator}
                    pnrinfo={this.props.pnrinfo.eotOriginator}
                />

                <PnrViewerSimpleGroup
                    shouldHideNulls={this.state.hideNulls}
                    title="RESPO"
                    keydata="respo"
                    data={this.props.pnr.respo}
                    pnrinfo={this.props.pnrinfo.respo}
                />
            </div>
        );
    }

}

export default PnrViewer;
