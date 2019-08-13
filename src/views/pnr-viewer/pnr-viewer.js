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
        console.log(this.state.hideNulls);

        return (
            <div>
                <HideNull
                    shouldHideNulls={this.state.hideNulls}
                    setHideNulls={() => this.setState({ hideNulls: !this.state.hideNulls})}
                />
                <PnrViewerBody shouldHideNulls={this.state.hideNulls} />
                <PnrViewerKeys shouldHideNulls={this.state.hideNulls} />
            </div>
        );
    }

}

export default PnrViewer;
