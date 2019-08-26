import React from 'react';

class HideNulls extends React.Component {

    render() {
        return (
            <div className="alert alert-dark" role="alert">
                <input
                    type="checkbox"
                    className="big-checkbox align-middle"
                    onClick={() => this.props.setHideNulls()}
                    value={this.props.shouldHideNulls}
                />
                <span className="ml-3">Hide null values</span>
            </div>
        );
    }

}

export default HideNulls;
