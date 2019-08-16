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

						{Object.keys(this.props.pnr.body).map(key => {
							return this.props.shouldHideNulls && this.props.pnr.body[key] == null ?
								null :
								(<PnrViewerTableRow
									key={key + "_" + "0"}
									label={key}
									data={this.props.pnr.body[key]}
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
