import React from 'react';
import PnrViewerSimpleGroup from './pnr-viewer-simple-group'
import PnrViewerArray from './pnr-viewer-array'
import PnrViewerTableRow from './pnr-viewer-table-row';


class PnrViewerShiftedGroup extends React.Component {

	render() {
        if (!this.props.data) {
            return null;
        }

        return (
			<React.Fragment>
				<tr>
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
