import React from 'react';
import PnrViewerBody from './pnr-viewer-body'

class PnrViewer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            hideNulls: false
        }

    }

    render() {
        return (

            <div>
                <div className="row">
                    <div className="alert alert-dark" role="alert">
                        <input type="checkbox" className="big-checkbox align-middle" onClick={this.hideNulls} />  Hide null values
                    </div>
                </div>
                <br />

                <div className="accordion" id="pnrViewerAccordion">
                    <div className="card">
                        <div className="card-header" id="headingOne">
                            <h2 className="mb-0">
                                <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    PNR BODY
                                </button>
                            </h2>
                        </div>

                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#pnrViewerAccordion">
                            <div className="card-body">
                                <PnrViewerBody />
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingTwo">
                            <h2 className="mb-0">
                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Collapsible Group Item #2
                                </button>
                            </h2>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#pnrViewerAccordion">
                            <div className="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

    hideNulls = (event) => {
        this.setState({ hideNulls: !this.state.hideNulls });
        console.log(this.state.hideNulls);
    }

}

export default PnrViewer;
