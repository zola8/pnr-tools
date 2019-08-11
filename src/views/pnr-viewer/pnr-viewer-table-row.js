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
                            <span className="badge badge-pill badge-info badgeRight" title={this.tooltip}>?</span>
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
                    <span className="badge badge-pill badge-success">true</span>
                );
            else
                return (
                    <span className="badge badge-pill badge-danger">false</span>
                );
        }

        return (
            data
        );
    }

}

export default PnrViewerTableRow;
