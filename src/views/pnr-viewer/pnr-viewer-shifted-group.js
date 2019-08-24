import React from 'react';
import PnrViewerSimpleGroup from './pnr-viewer-simple-group'

class PnrViewerShiftedGroup extends React.Component {

	render() {
		return (
			<React.Fragment>
				<tr>
					<th scope="row" className="w-50">
						{this.props.title}
					</th>
					<td>
						{
							this.props.data.forEach(function (item, index) {
								console.log(item, index);
								// TODO recursive PnrViewerSimpleGroup call?

							})
						}
					</td>
				</tr>
			</React.Fragment>
		);
	}

}

export default PnrViewerShiftedGroup;
