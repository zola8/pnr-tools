import React from 'react';
import HideNull from './hide-null'
import PnrViewerBody from './pnr-viewer-body'
import PnrViewerKeys from './pnr-viewer-keys'

class PnrViewer extends React.Component {

    render() {
        return (
            <div>
                <HideNull />
                <PnrViewerBody />
                <PnrViewerKeys />
            </div>
        );
    }

}

export default PnrViewer;
