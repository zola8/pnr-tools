import React from 'react';
import pnr from '../../App-data-pnr'
import pnrInfo from '../../App-data-pnr-info'
import PnrViewerTableRow from './pnr-viewer-table-row'

class PnrViewerBody extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            pnr: pnr,
            pnrInfo: pnrInfo
        };
    }

    render() {
        console.log(Object.keys(pnr))
        return (
            <div className="row justify-content-md-center">
                <table className="table table-hover table-striped table-sm">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">PNR BODY</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>


                        {this.props.shouldHideNulls && pnr.crsId == null ? null :
                            <PnrViewerTableRow label="crsId" data={pnr.crsId} info={pnrInfo} />
                        }
                        {this.props.shouldHideNulls && pnr.recordLocator == null ? null :
                            <PnrViewerTableRow label="recordLocator" data={pnr.recordLocator} info={pnrInfo} />
                        }
                        {this.props.shouldHideNulls && pnr.creationDate == null ? null :
                            <PnrViewerTableRow label="creationDate" data={pnr.creationDate} info={pnrInfo} />
                        }
                        {this.props.shouldHideNulls && pnr.creationDateTime == null ? null :
                            <PnrViewerTableRow label="creationDateTime" data={pnr.creationDateTime} info={pnrInfo} />
                        }
                        {this.props.shouldHideNulls && pnr.commencePoint == null ? null :
                            <PnrViewerTableRow label="commencePoint" data={pnr.commencePoint} info={pnrInfo} />
                        }
                        {this.props.shouldHideNulls && pnr.nonCommercial == null ? null :
                            <PnrViewerTableRow label="nonCommercial" data={pnr.nonCommercial} info={pnrInfo} />
                        }
                        {this.props.shouldHideNulls && pnr.canceled == null ? null :
                            <PnrViewerTableRow label="canceled" data={pnr.canceled} info={pnrInfo} />
                        }
                        {this.props.shouldHideNulls && pnr.operating == null ? null :
                            <PnrViewerTableRow label="operating" data={pnr.operating} info={pnrInfo} />
                        }
                        {this.props.shouldHideNulls && pnr.allotment == null ? null :
                            <PnrViewerTableRow label="allotment" data={pnr.allotment} info={pnrInfo} />
                        }
                        {this.props.shouldHideNulls && pnr.oRespOff == null ? null :
                            <PnrViewerTableRow label="oRespOff" data={pnr.oRespOff} info={pnrInfo} />
                        }
                        {this.props.shouldHideNulls && pnr.oPosCnty == null ? null :
                            <PnrViewerTableRow label="oPosCnty" data={pnr.oPosCnty} info={pnrInfo} />
                        }
                        {this.props.shouldHideNulls && pnr.oPosCity == null ? null :
                            <PnrViewerTableRow label="oPosCity" data={pnr.oPosCity} info={pnrInfo} />
                        }
                        {this.props.shouldHideNulls && pnr.oPosCrs == null ? null :
                            <PnrViewerTableRow label="oPosCrs" data={pnr.oPosCrs} info={pnrInfo} />
                        }
                        {this.props.shouldHideNulls && pnr.lastArrivalUTC == null ? null :
                            <PnrViewerTableRow label="lastArrivalUTC" data={pnr.lastArrivalUTC} info={pnrInfo} />
                        }
                        {this.props.shouldHideNulls && pnr.extendedLastArrivalUTC == null ? null :
                            <PnrViewerTableRow label="extendedLastArrivalUTC" data={pnr.extendedLastArrivalUTC} info={pnrInfo} />
                        }
                        {this.props.shouldHideNulls && pnr.firstDepartureUTC == null ? null :
                            <PnrViewerTableRow label="firstDepartureUTC" data={pnr.firstDepartureUTC} info={pnrInfo} />
                        }
                        {this.props.shouldHideNulls && pnr.extendedFirstDepartureUTC == null ? null :
                            <PnrViewerTableRow label="extendedFirstDepartureUTC" data={pnr.extendedFirstDepartureUTC} info={pnrInfo} />
                        }
                        {this.props.shouldHideNulls && pnr.eotDate == null ? null :
                            <PnrViewerTableRow label="eotDate" data={pnr.eotDate} info={pnrInfo} />
                        }
                        {this.props.shouldHideNulls && pnr.crsVersionNumber == null ? null :
                            <PnrViewerTableRow label="crsVersionNumber" data={pnr.crsVersionNumber} info={pnrInfo} />
                        }
                    </tbody>
                </table>
            </div>
        );
    }

}

export default PnrViewerBody;
