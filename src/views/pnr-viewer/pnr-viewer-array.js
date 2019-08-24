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

        for (const [index, array] of this.props.data.entries()) {
            section.push(this.renderTable(array, index))
        }

        return section;
    }

    renderTable = (array, index) => {
        return (
            <div key={this.props.keydata + '_main_' + index}>
                <span className="badge badge-secondary">#{index}</span>

                <div className="justify-content-md-center" key={'PnrViewerArray_div_' + index}>
                    <table className="table table-hover table-striped table-sm">
                        <tbody>
                            {Object.keys(array).map((key) => {
                                return this.props.shouldHideNulls && array[key] == null ?
                                    null :
                                    (<PnrViewerTableRow
                                        key={this.props.keydata + '_main_' + index + '_' + key}
                                        label={key}
                                        data={array[key]}
                                    />
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
