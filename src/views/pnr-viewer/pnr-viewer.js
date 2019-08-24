import React from 'react';
import HideNull from './hide-null'
import PnrViewerArray from './pnr-viewer-array'
import PnrViewerSimpleGroup from './pnr-viewer-simple-group'
import ToggleAllElements from './toggle-all-elements'

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
                <div className="row">
                    <HideNull
                        shouldHideNulls={this.state.hideNulls}
                        setHideNulls={() => this.setState({ hideNulls: !this.state.hideNulls })}
                    />

                    <ToggleAllElements />
                </div>

                <div className="row mt-3">
                    <a className="col-12 btn btn-outline-dark square" data-toggle="collapse" href="#collapse_pnr" role="button" aria-expanded="false" aria-controls="collapse_pnr">
                        PNR
                    </a>
                </div>
                <div className="row collapse show multi-collapse-view" id="collapse_pnr">
                    <PnrViewerSimpleGroup
                        shouldHideNulls={this.state.hideNulls}
                        keydata="pnrBody"
                        data={this.props.pnr.body}
                        pnrinfo={this.props.pnrinfo}
                    />
                </div>

                <div className="row mt-3">
                    <a className="col-12 btn btn-outline-dark square" data-toggle="collapse" href="#collapse_pnrkeys" role="button" aria-expanded="false" aria-controls="collapse_pnrkeys">
                        PNR KEYS
                    </a>
                </div>
                <div className="row collapse show multi-collapse-view" id="collapse_pnrkeys">
                    <PnrViewerArray
                        shouldHideNulls={this.state.hideNulls}
                        keydata="pnrKeys"
                        data={this.props.pnr.pnrKeys}
                        pnrinfo={this.props.pnrinfo}
                    />
                </div>

                <div className="row mt-3">
                    <a className="col-12 btn btn-outline-dark square" data-toggle="collapse" href="#collapse_eotoriginator" role="button" aria-expanded="false" aria-controls="collapse_eotoriginator">
                        EOT ORIGINATOR
                    </a>
                </div>
                <div className="row collapse show multi-collapse-view" id="collapse_eotoriginator">
                    <PnrViewerSimpleGroup
                        shouldHideNulls={this.state.hideNulls}
                        keydata="eotOriginator"
                        data={this.props.pnr.eotOriginator}
                        pnrinfo={this.props.pnrinfo.eotOriginator}
                    />
                </div>

                <div className="row mt-3">
                    <a className="col-12 btn btn-outline-dark square" data-toggle="collapse" href="#collapse_respo" role="button" aria-expanded="false" aria-controls="collapse_respo">
                        RESPO
                    </a>
                </div>
                <div className="row collapse show multi-collapse-view" id="collapse_respo">
                    <PnrViewerSimpleGroup
                        shouldHideNulls={this.state.hideNulls}
                        keydata="respo"
                        data={this.props.pnr.respo}
                        pnrinfo={this.props.pnrinfo.respo}
                    />
                </div>

                <div className="row mt-3">
                    <a className="col-12 btn btn-outline-dark square" data-toggle="collapse" href="#collapse_group" role="button" aria-expanded="false" aria-controls="collapse_group">
                        GROUP
                    </a>
                </div>
                <div className="row collapse show multi-collapse-view" id="collapse_group">
                    <PnrViewerSimpleGroup
                        shouldHideNulls={this.state.hideNulls}
                        keydata="group"
                        data={this.props.pnr.group}
                        pnrinfo={this.props.pnrinfo.group}
                    />
                </div>

                <div className="row mt-3">
                    <a className="col-12 btn btn-outline-dark square" data-toggle="collapse" href="#collapse_names" role="button" aria-expanded="false" aria-controls="collapse_names">
                        NAMES
                    </a>
                </div>
                <div className="row collapse show multi-collapse-view" id="collapse_names">
                    <PnrViewerArray
                        shouldHideNulls={this.state.hideNulls}
                        keydata="names"
                        data={this.props.pnr.names}
                        pnrinfo={this.props.pnrinfo}
                    />
                </div>

                <div className="row mt-3">
                    <a className="col-12 btn btn-outline-dark square" data-toggle="collapse" href="#collapse_segments" role="button" aria-expanded="false" aria-controls="collapse_segments">
                        SEGMENTS
                    </a>
                </div>
                <div className="row collapse show multi-collapse-view" id="collapse_segments">
                    <PnrViewerArray
                        shouldHideNulls={this.state.hideNulls}
                        keydata="segments"
                        data={this.props.pnr.segments}
                        pnrinfo={this.props.pnrinfo}
                    />
                </div>

            </div>
        );
    }

}

export default PnrViewer;
