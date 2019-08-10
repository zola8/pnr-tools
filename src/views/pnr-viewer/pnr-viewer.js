import React from 'react';
import pnr from '../../App-data'

class PnrViewer extends React.Component {

    constructor(props) {
        super(props);

        this.props = {
            pnr: pnr
        };

        this.state = {
            hideNulls: false
        }

    }

    render() {
        return (

            <div>
                <div>
                    <input type="checkbox" onClick={this.hideNulls.bind(this)} />
                    hide nulls
                </div>
                <br />

                <div class="row justify-content-md-center">
                    <table className="table table-hover table-bordered table-sm col-6">
                        <tbody>
                            <tr className={this.state.hideNulls && pnr.crsId == null ? "d-none" : ""}>
                                <th scope="row" className="w-50">crsId</th>
                                <td>{pnr.crsId}</td>
                            </tr>
                            <tr className={this.state.hideNulls && pnr.recordLocator == null ? "d-none" : ""}>
                                <th scope="row">recordLocator</th>
                                <td>{pnr.recordLocator}</td>
                            </tr>
                            <tr className={this.state.hideNulls && pnr.crsId == null ? "d-none" : ""}>
                                <th scope="row">creationDate</th>
                                <td>{pnr.creationDate}</td>
                            </tr>
                            <tr className={this.state.hideNulls && pnr.creationDateTime == null ? "d-none" : ""}>
                                <th scope="row">creationDateTime</th>
                                <td>{pnr.creationDateTime}</td>
                            </tr>
                            <tr className={this.state.hideNulls && pnr.commencePoint == null ? "d-none" : ""}>
                                <th scope="row">commencePoint</th>
                                <td>{pnr.commencePoint}</td>
                            </tr>
                            <tr className={this.state.hideNulls && pnr.nonCommercial == null ? "d-none" : ""}>
                                <th scope="row">nonCommercial</th>
                                <td>{'' + pnr.nonCommercial}</td>
                            </tr>
                            <tr className={this.state.hideNulls && pnr.canceled == null ? "d-none" : ""}>
                                <th scope="row">canceled</th>
                                <td>{'' + pnr.canceled}</td>
                            </tr>
                            <tr className={this.state.hideNulls && pnr.operating == null ? "d-none" : ""}>
                                <th scope="row">operating</th>
                                <td>{'' + pnr.operating}</td>
                            </tr>
                            <tr className={this.state.hideNulls && pnr.allotment == null ? "d-none" : ""}>
                                <th scope="row">allotment</th>
                                <td>{'' + pnr.allotment}</td>
                            </tr>
                            <tr className={this.state.hideNulls && pnr.oRespOff == null ? "d-none" : ""}>
                                <th scope="row">oRespOff</th>
                                <td>{pnr.oRespOff}</td>
                            </tr>
                            <tr className={this.state.hideNulls && pnr.oPosCnty == null ? "d-none" : ""}>
                                <th scope="row">oPosCnty</th>
                                <td>{pnr.oPosCnty}</td>
                            </tr>
                            <tr className={this.state.hideNulls && pnr.oPosCity == null ? "d-none" : ""}>
                                <th scope="row">oPosCity</th>
                                <td>{pnr.oPosCity}</td>
                            </tr>
                            <tr className={this.state.hideNulls && pnr.oPosCrs == null ? "d-none" : ""}>
                                <th scope="row">oPosCrs</th>
                                <td>{pnr.oPosCrs}</td>
                            </tr>
                            <tr className={this.state.hideNulls && pnr.lastArrivalUTC == null ? "d-none" : ""}>
                                <th scope="row">lastArrivalUTC</th>
                                <td>{pnr.lastArrivalUTC}</td>
                            </tr>
                            <tr className={this.state.hideNulls && pnr.extendedLastArrivalUTC == null ? "d-none" : ""}>
                                <th scope="row">extendedLastArrivalUTC</th>
                                <td>{pnr.extendedLastArrivalUTC}</td>
                            </tr>
                            <tr className={this.state.hideNulls && pnr.firstDepartureUTC == null ? "d-none" : ""}>
                                <th scope="row">firstDepartureUTC</th>
                                <td>{pnr.firstDepartureUTC}</td>
                            </tr>
                            <tr className={this.state.hideNulls && pnr.extendedFirstDepartureUTC == null ? "d-none" : ""}>
                                <th scope="row">extendedFirstDepartureUTC</th>
                                <td>{pnr.extendedFirstDepartureUTC}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

        );
    }

    hideNulls(e) {
        this.setState({ hideNulls: !this.state.hideNulls });
        console.log(this.state.hideNulls);
    }

}

export default PnrViewer;
