import React from 'react';

class HideNull extends React.Component {

    constructor() {
        super();
        this.state = {
            hideNulls: false
        }
    }

    render() {
        return (
            <div className="row">
                <div className="alert alert-dark" role="alert">
                    <input type="checkbox" className="big-checkbox align-middle" onClick={this.hideNullsEvent} />  Hide null values
                </div>
            </div>
        );
    }

    hideNullsEvent = (event) => {
        this.setState({ hideNulls: !this.state.hideNulls });
        console.log(this.state.hideNulls);
    }

}

export default HideNull;
