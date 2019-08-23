import React from 'react';
import PnrViewerTableRow from './pnr-viewer-table-row';

class PnrViewerSimpleGroup extends React.Component {

	render() {
		if (!this.props.data) {
			return null;
		}

		return (
			<div className="row justify-content-md-center">
				<table className="table table-hover table-striped table-sm">
					<thead className="thead-dark">
						<tr>
							<th scope="col">{this.props.title}</th>
							<th scope="col"></th>
						</tr>
					</thead>
					<tbody>
						{Object.keys(this.props.data).map((key, index) => {
							return this.props.shouldHideNulls && this.props.data[key] == null ?
								null :
								(<PnrViewerTableRow
									key={this.props.keydata + '_' + key + '_' + index}
									label={key}
									data={this.props.data[key]}
									info={this.props.pnrinfo} />
								);
						})}
					</tbody>
				</table>
			</div>
		);
	}

}

export default PnrViewerSimpleGroup;
