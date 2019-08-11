import React from 'react';
import pnr from '../../App-data-pnr'
import pnrInfo from '../../App-data-pnr-info'
import PnrViewerTableRow from './pnr-viewer-table-row'

class PnrViewerKeys extends React.Component {

    constructor(props) {
        super(props);

        this.props = {
            pnr: pnr,
            pnrInfo: pnrInfo
        };

        this.state = {
            hideNulls: false
        }
    }

    render() {
        return (
            <div>
                {this.createSections()}
            </div>
        );
    }

    createSections = () => {
        let section = []

        // TODO globalis valtozobol?? cserelni this.props-ra
        for (const pnrkey of pnr.pnrKeys) {
            section.push(this.renderTable(pnrkey))
        }

        return section
    }

    renderTable = (pnrkey) => {
        return (
            <div className="row justify-content-md-center">
                <table className="table table-hover table-striped table-sm">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">PNR KEYS</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.hideNulls && pnrkey.fileKey == null ? null :
                            <PnrViewerTableRow label="fileKey" data={pnrkey.fileKey} info={pnrInfo.pnrKeys} />
                        }
                        {this.state.hideNulls && pnrkey.crsId == null ? null :
                            <PnrViewerTableRow label="crsId" data={pnrkey.crsId} info={pnrInfo.pnrKeys} />
                        }
                    </tbody>
                </table>
            </div>
        );
    }

}

export default PnrViewerKeys;
