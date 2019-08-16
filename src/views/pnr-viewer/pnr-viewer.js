import React from 'react';
import HideNull from './hide-null'
import PnrViewerBody from './pnr-viewer-body'

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
                    setHideNulls={() => this.setState({ hideNulls: !this.state.hideNulls })}
                />
                <PnrViewerBody
                    shouldHideNulls={this.state.hideNulls}
                    pnr={this.props.pnr}
                    pnrinfo={this.props.pnrinfo}
                />

            </div>
        );
    }

}

export default PnrViewer;
