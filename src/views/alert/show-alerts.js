import React from 'react';
import Alert from './alert'

export default class ShowAlerts extends React.Component {

    render() {

        console.log('-- ', this.props.data);

        if (this.props.data === undefined || this.props.data.length == 0) {
            // array empty or does not exist
            return null;
        }

        return (
            <div>
                <Alert />
            </div>
        )
    }


}