import React from 'react';

class PnrViewerTableRow extends React.Component {

    constructor(props) {
        super(props);

        this.tooltip = this.props.info ? this.props.info[this.props.label] : null;
    }

    render() {
        return (
            <React.Fragment>
                <tr className={this.props.addClass}>
                    <th scope="row" className="w-50">
                        {this.props.label}
                        {this.tooltip &&
                            <span className="badge badge-pill badge-info ml-3" title={this.tooltip}>?</span>
                        }
                    </th>
                    <td>
                        {this.getPropData(this.props.data)}
                    </td>
                </tr>
            </React.Fragment>
        );
    }

    getPropData(data) {
        if (data == null)
            return null;

        if (typeof data === "boolean") {
            if (data)
                return (
                    <div className="form-group form-check mb-0">
                        <input type="checkbox" class="form-check-input" checked />
                        <label className="form-check-label text-success">true</label>
                    </div>
                );
            else
                return (
                    <div className="form-group form-check mb-0">
                        <input type="checkbox" class="form-check-input" disabled="disabled" />
                        <label className="form-check-label text-danger">false</label>
                    </div>
                );
        }

        return (
            data
        );
    }

}

export default PnrViewerTableRow;
