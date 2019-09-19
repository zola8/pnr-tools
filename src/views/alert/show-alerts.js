import React from 'react';
import Alert from './alert'

export default class ShowAlerts extends React.Component {

    constructor() {
        super();

        this.removeAlert = this.removeAlert.bind(this);
    }

    render() {
        return !!this.props.data && this.props.data.length > 0 && (
            <div>
                {this.createEntriesFromArray(this.props.data)}
            </div>
        )
    }

    createEntriesFromArray = (array) => {
        let entries = [];

        for (const [index, value] of array.entries()) {
            let content = (
                <Alert key={'ShowAlerts_' + index}
                    type={value.type}
                    header={value.header}
                    message={value.message}
                />
            )
            entries.push(content);
        }

        return entries;
    }

    removeAlert = () => {
        console.log('remove alert');
    }

}