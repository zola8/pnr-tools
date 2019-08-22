import React from 'react';
import PnrViewerTableRow from './pnr-viewer-table-row';

class PnrViewerBody extends React.Component {

	render() {
		return (
			<div className="row justify-content-md-center">
				<table className="table table-hover table-striped table-sm">
					<thead className="thead-dark">
						<tr>
							<th scope="col">PNR</th>
							<th scope="col"></th>
						</tr>
					</thead>
					<tbody>
						{Object.keys(this.props.data.body).map((key, index) => {
							return this.props.shouldHideNulls && this.props.data.body[key] == null ?
								null :
								(<PnrViewerTableRow
									key={'PnrViewerBody_' + key + '_' + index}
									label={key}
									data={this.props.data.body[key]}
									info={this.props.pnrinfo} />
								);
						})}
					</tbody>
				</table>
			</div>
		);
	}

}

export default PnrViewerBody;
