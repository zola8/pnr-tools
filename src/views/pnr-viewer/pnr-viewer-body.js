import React from 'react';
import pnr from '../../App-data-pnr'
import pnrInfo from '../../App-data-pnr-info'
import PnrViewerTableRow from './pnr-viewer-table-row'

class PnrViewerBody extends React.Component {

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
            <div className="row justify-content-md-center">
                <table className="table table-hover table-striped table-sm">
                    <tbody>
                        {this.state.hideNulls && pnr.crsId == null ? null :
                            <PnrViewerTableRow label="crsId" data={pnr.crsId} info={pnrInfo} />
                        }
                        {this.state.hideNulls && pnr.recordLocator == null ? null :
                            <PnrViewerTableRow label="recordLocator" data={pnr.recordLocator} info={pnrInfo} />
                        }
                        {this.state.hideNulls && pnr.creationDate == null ? null :
                            <PnrViewerTableRow label="creationDate" data={pnr.creationDate} info={pnrInfo} />
                        }
                        {this.state.hideNulls && pnr.creationDateTime == null ? null :
                            <PnrViewerTableRow label="creationDateTime" data={pnr.creationDateTime} info={pnrInfo} />
                        }
                        {this.state.hideNulls && pnr.commencePoint == null ? null :
                            <PnrViewerTableRow label="commencePoint" data={pnr.commencePoint} info={pnrInfo} />
                        }
                        {this.state.hideNulls && pnr.nonCommercial == null ? null :
                            <PnrViewerTableRow label="nonCommercial" data={pnr.nonCommercial} info={pnrInfo} />
                        }
                        {this.state.hideNulls && pnr.canceled == null ? null :
                            <PnrViewerTableRow label="canceled" data={pnr.canceled} info={pnrInfo} />
                        }
                        {this.state.hideNulls && pnr.operating == null ? null :
                            <PnrViewerTableRow label="operating" data={pnr.operating} info={pnrInfo} />
                        }
                        {this.state.hideNulls && pnr.allotment == null ? null :
                            <PnrViewerTableRow label="allotment" data={pnr.allotment} info={pnrInfo} />
                        }
                        {this.state.hideNulls && pnr.oRespOff == null ? null :
                            <PnrViewerTableRow label="oRespOff" data={pnr.oRespOff} info={pnrInfo} />
                        }
                        {this.state.hideNulls && pnr.oPosCnty == null ? null :
                            <PnrViewerTableRow label="oPosCnty" data={pnr.oPosCnty} info={pnrInfo} />
                        }
                        {this.state.hideNulls && pnr.oPosCity == null ? null :
                            <PnrViewerTableRow label="oPosCity" data={pnr.oPosCity} info={pnrInfo} />
                        }
                        {this.state.hideNulls && pnr.oPosCrs == null ? null :
                            <PnrViewerTableRow label="oPosCrs" data={pnr.oPosCrs} info={pnrInfo} />
                        }
                        {this.state.hideNulls && pnr.lastArrivalUTC == null ? null :
                            <PnrViewerTableRow label="lastArrivalUTC" data={pnr.lastArrivalUTC} info={pnrInfo} />
                        }
                        {this.state.hideNulls && pnr.extendedLastArrivalUTC == null ? null :
                            <PnrViewerTableRow label="extendedLastArrivalUTC" data={pnr.extendedLastArrivalUTC} info={pnrInfo} />
                        }
                        {this.state.hideNulls && pnr.firstDepartureUTC == null ? null :
                            <PnrViewerTableRow label="firstDepartureUTC" data={pnr.firstDepartureUTC} info={pnrInfo} />
                        }
                        {this.state.hideNulls && pnr.extendedFirstDepartureUTC == null ? null :
                            <PnrViewerTableRow label="extendedFirstDepartureUTC" data={pnr.extendedFirstDepartureUTC} info={pnrInfo} />
                        }
                    </tbody>
                </table>
            </div>
        );
    }

}

export default PnrViewerBody;
