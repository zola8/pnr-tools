import React from 'react';
import PnrViewerTableRow from './pnr-viewer-table-row';
import PnrViewerMultipleTableRow from './pnr-viewer-multiple-table-row';

class PnrViewerSimpleGroup extends React.Component {

	render() {
		if (!this.props.data) {
			return null;
		}

		return (
			<div className="col-12 justify-content-md-center">
				<table className="table table-hover table-striped table-sm">
					<tbody>
						{Object.keys(this.props.data).map((key, index) => {

							if (this.props.shouldHideNulls && this.props.data[key] == null) {
								return null;
							}

							if (Array.isArray(this.props.data[key])) {
								return (
									<PnrViewerMultipleTableRow
										key={this.props.keydata + '_' + key + '_' + index}
										data={this.props.data[key]}
										keydata={key}
										parentkeydata={this.props.keydata + '_' + key + '_' + index}
									/>
								);
							}

							return (
								<PnrViewerTableRow
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
