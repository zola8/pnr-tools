import React from 'react';
import HideNull from './hide-null'
import PnrViewerBody from './pnr-viewer-body'
import PnrViewerKeys from './pnr-viewer-keys'

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
                <PnrViewerBody
                    shouldHideNulls={this.state.hideNulls}
                    data={this.props.pnr}
                    pnrinfo={this.props.pnrinfo}
                />
                <PnrViewerKeys
                    shouldHideNulls={this.state.hideNulls}
                    data={this.props.pnr.pnrKeys}
                    pnrinfo={this.props.pnrinfo}
                />
            </div>
        );
    }

}

export default PnrViewer;
