import React from 'react';


class PnrViewerMultipleTableRow extends React.Component {

	render() {
		if (!this.props.data) {
			return null;
		}

		return (
			<React.Fragment>
				<tr>
					<th scope="row" className="w-50">
						{this.props.keydata}
					</th>
					<td>
						array
					</td>
				</tr>
				{this.createSections()}
			</React.Fragment>
		);
	}

	createSections = () => {
		let section = [];

		for (const [index, array] of this.props.data.entries()) {
			section.push(this.renderBadge(index))

			Object.keys(array).map((key, index2) => {
				let keydata = this.props.parentkeydata + '_' + key + '_' + index + '_' + index2;

				section.push(this.renderContent(keydata, key, array[key]))
				return null;
			})

		}

		return section;
	}

	renderBadge = (index) => {
		return (
			<tr key={this.props.parentkeydata + '_' + index}>
				<th scope="row" className="w-50">
					<span className="badge badge-secondary">#{index}</span>
				</th>
				<td>
				</td>
			</tr>
		);
	}

	renderContent = (keydata, key, value) => {
		return (
			<tr key={keydata}>
				<th scope="row" className="w-50">
					<div className="col offset-md-1">
						{key}
					</div>
				</th>
				<td>
					{value}
				</td>
			</tr>
		);
	}

}

export default PnrViewerMultipleTableRow;
