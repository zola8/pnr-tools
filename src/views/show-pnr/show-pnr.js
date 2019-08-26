import React from 'react';
import HideNulls from './hide-nulls'
import DataValue from './data-value'
import RenderValueBoolean from './render-value-boolean'
import RenderValueNull from './render-value-null'
import RenderValueArray from './render-value-array'
import RenderValueObject from './render-value-object'

export default class ShowPnr extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            shouldHideNulls: false
        }
    }

    render() {
        return (
            <div>
                <div className="row">
                    <HideNulls
                        shouldHideNulls={this.state.shouldHideNulls}
                        setHideNulls={() => this.setState({ shouldHideNulls: !this.state.shouldHideNulls })}
                    />
                </div>

                {this.createEntries(this.props.data)}
            </div>
        );
    }

    createEntries = (data) => {
        let entries = [];

        Object.keys(data).map((key) => {
            let value = data[key];

            if (this.state.shouldHideNulls && value == null) {
                // hide elements
            } else {
                entries.push(this.renderRow(key, value))
            }
        });

        return entries;
    }

    renderRow = (key, value) => {
        let content = null;

        switch (DataValue.getValueType(value)) {
            case DataValue._NULL:
                content = (<RenderValueNull />)
                break;
            case DataValue._BOOLEAN:
                content = (<RenderValueBoolean data={value} />)
                break;
            case DataValue._ARRAY:
                content = (<RenderValueArray />)
                break;
            case DataValue._OBJECT:
                content = (<RenderValueObject />)
                break;
            case DataValue._DATA:
                content = value;
                break;
        }

        return (
            <div className="row border" key={'ShowPnr_' + key}>
                <div className="col font-weight-bold">
                    {key}
                </div>
                <div className="col">
                    {content}
                </div>
            </div>
        );
    }

}
