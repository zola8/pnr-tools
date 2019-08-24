import React from 'react';
import PnrViewerTableRow from './pnr-viewer-table-row'

class PnrViewerArray extends React.Component {

    render() {
        if (!this.props.data) {
            return null;
        }

        return (
            <div className="col-12">
                {this.createSections()}
            </div>
        );
    }

    createSections = () => {
        let section = [];

        for (const [index, pnrkey] of this.props.data.entries()) {
            section.push(this.renderTable(pnrkey, index))
        }

        return section;
    }

    renderTable = (pnrkey, index) => {
        return (
            <div key={this.props.keydata + '_main_' + index}>
                <span className="badge badge-secondary">#{index}</span>

                <div className="justify-content-md-center" key={'PnrViewerArray_div_' + index}>
                    <table className="table table-hover table-striped table-sm">
                        <tbody>
                            {Object.keys(pnrkey).map((key) => {
                                return this.props.shouldHideNulls && pnrkey[key] == null ?
                                    null :
                                    (<PnrViewerTableRow
                                        key={this.props.keydata + '_main_' + index + '_' + key}
                                        label={key}
                                        data={pnrkey[key]}
                                        info={this.props.pnrinfo.pnrKeys} />
                                    );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

}

export default PnrViewerArray;
