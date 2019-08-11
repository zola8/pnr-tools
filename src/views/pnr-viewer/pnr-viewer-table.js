import React from 'react';
import pnr from '../../App-data-pnr'
import pnrInfo from '../../App-data'
import PnrViewerTableRow from './pnr-viewer-table-row'

class PnrViewerTable extends React.Component {

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
                <div>
                    <input type="checkbox" onClick={this.hideNulls} />
                    hide nulls
                </div>
                <br />

                <div className="row justify-content-md-center">
                    <table className="table table-hover table-bordered table-sm col-9">
                        <tbody>
                            {this.state.hideNulls && pnr.crsId == null ? true :
                                <PnrViewerTableRow label="crsId" data={pnr.crsId} info={pnrInfo} />
                            }
                            {this.state.hideNulls && pnr.recordLocator == null ? true :
                                <PnrViewerTableRow label="recordLocator" data={pnr.recordLocator} info={pnrInfo} />
                            }
                            {this.state.hideNulls && pnr.creationDate == null ? true :
                                <PnrViewerTableRow label="creationDate" data={pnr.creationDate} info={pnrInfo} />
                            }
                            {this.state.hideNulls && pnr.creationDateTime == null ? true :
                                <PnrViewerTableRow label="creationDateTime" data={pnr.creationDateTime} info={pnrInfo} />
                            }
                            {this.state.hideNulls && pnr.commencePoint == null ? true :
                                <PnrViewerTableRow label="commencePoint" data={pnr.commencePoint} info={pnrInfo} />
                            }
                            {this.state.hideNulls && pnr.nonCommercial == null ? true :
                                <PnrViewerTableRow label="nonCommercial" data={pnr.nonCommercial} info={pnrInfo} />
                            }
                            {this.state.hideNulls && pnr.canceled == null ? true :
                                <PnrViewerTableRow label="canceled" data={pnr.canceled} info={pnrInfo} />
                            }
                            {this.state.hideNulls && pnr.operating == null ? true :
                                <PnrViewerTableRow label="operating" data={pnr.operating} info={pnrInfo} />
                            }
                            {this.state.hideNulls && pnr.allotment == null ? true :
                                <PnrViewerTableRow label="allotment" data={pnr.allotment} info={pnrInfo} />
                            }
                            {this.state.hideNulls && pnr.oRespOff == null ? true :
                                <PnrViewerTableRow label="oRespOff" data={pnr.oRespOff} info={pnrInfo} />
                            }
                            {this.state.hideNulls && pnr.oPosCnty == null ? true :
                                <PnrViewerTableRow label="oPosCnty" data={pnr.oPosCnty} info={pnrInfo} />
                            }
                            {this.state.hideNulls && pnr.oPosCity == null ? true :
                                <PnrViewerTableRow label="oPosCity" data={pnr.oPosCity} info={pnrInfo} />
                            }
                            {this.state.hideNulls && pnr.oPosCrs == null ? true :
                                <PnrViewerTableRow label="oPosCrs" data={pnr.oPosCrs} info={pnrInfo} />
                            }
                            {this.state.hideNulls && pnr.lastArrivalUTC == null ? true :
                                <PnrViewerTableRow label="lastArrivalUTC" data={pnr.lastArrivalUTC} info={pnrInfo} />
                            }
                            {this.state.hideNulls && pnr.extendedLastArrivalUTC == null ? true :
                                <PnrViewerTableRow label="extendedLastArrivalUTC" data={pnr.extendedLastArrivalUTC} info={pnrInfo} />
                            }
                            {this.state.hideNulls && pnr.firstDepartureUTC == null ? true :
                                <PnrViewerTableRow label="firstDepartureUTC" data={pnr.firstDepartureUTC} info={pnrInfo} />
                            }
                            {this.state.hideNulls && pnr.extendedFirstDepartureUTC == null ? true :
                                <PnrViewerTableRow label="extendedFirstDepartureUTC" data={pnr.extendedFirstDepartureUTC} info={pnrInfo} />
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

    hideNulls = (event) => {
        this.setState({ hideNulls: !this.state.hideNulls });
        console.log(this.state.hideNulls);
    }

}

export default PnrViewerTable;
