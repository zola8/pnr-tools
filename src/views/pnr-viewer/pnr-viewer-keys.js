import React from 'react';
import PnrViewerTableRow from './pnr-viewer-table-row'

class PnrViewerKeys extends React.Component {

    render() {
        return (
            <div>
                {this.createSections()}
            </div>
        );
    }

    createSections = () => {
        if (!this.props.data) {
            console.log('No pnrKeys found.');
            return null;
        }

        let section = [];

        for (const [index, pnrkey] of this.props.data.entries()) {
            section.push(this.renderTable(pnrkey, index))
        }

        return section;
    }

    renderTable = (pnrkey, index) => {
        return (
            <div className="row justify-content-md-center" key={'PnrViewerKeys_div_' + index}>
                <table className="table table-hover table-striped table-sm">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">PNR KEYS</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(pnrkey).map((key) => {
                            return this.props.shouldHideNulls && pnrkey[key] == null ?
                                null :
                                (<PnrViewerTableRow
                                    key={'PnrViewerKeys_' + key + '_' + index}
                                    label={key}
                                    data={pnrkey[key]}
                                    info={this.props.pnrinfo.pnrKeys} />
                                );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }

}

export default PnrViewerKeys;
