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
                <div className='row'>
                    <HideNulls
                        shouldHideNulls={this.state.shouldHideNulls}
                        setHideNulls={() => this.setState({ shouldHideNulls: !this.state.shouldHideNulls })}
                    />
                </div>

                {this.createEntriesFromObject(this.props.data, 0, 'ShowPnr')}
            </div>
        );
    }

    createEntriesFromObject = (data, indent, parentkey) => {
        let entries = [];

        Object.keys(data).map((key) => {
            let value = data[key];

            if (this.state.shouldHideNulls && value == null) {
                // hide elements
            } else {
                switch (DataValue.getValueType(value)) {
                    case DataValue._NULL:
                    case DataValue._BOOLEAN:
                    case DataValue._DATA:
                        entries.push(this.renderRow(parentkey, key, value, indent))
                        break;
                    case DataValue._ARRAY:
                        entries.push(this.renderRow(parentkey, key, value, indent))
                        entries.push(this.createEntriesFromArray(value, indent + 1, parentkey + '_' + key))
                        break;
                    case DataValue._OBJECT:
                        entries.push(this.renderRow(parentkey, key, value, indent))
                        entries.push(this.createEntriesFromObject(value, indent + 1, parentkey + '_' + key))
                        break;
                }
            }
        });

        return entries;
    }

    createEntriesFromArray = (data, indent, parentkey) => {
        let entries = [];

        for (const [index, value] of data.entries()) {
            switch (DataValue.getValueType(value)) {
                case DataValue._NULL:
                case DataValue._BOOLEAN:
                case DataValue._DATA:
                    entries.push(this.renderRow(parentkey + '_' + index, null, value, indent))
                    break;
                case DataValue._ARRAY:
                    // missing in PNRs
                    break;
                case DataValue._OBJECT:
                    entries.push(this.renderBadge(parentkey, index, indent))
                    entries.push(this.createEntriesFromObject(value, indent + 1, parentkey + '_' + index))
                    break;
            }
        }

        return entries;
    }

    renderRow = (parentkey, key, value, indent) => {
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

        let newKey = key == null ? parentkey : parentkey + '_' + key;

        return this.renderContent(newKey, indent, key, content);
    }

    renderBadge = (parentkey, index, indent) => {
        let newKey = parentkey + '_' + index;
        let content1 = (<span className='badge badge-pill badge-secondary'>#{index}</span>)

        return this.renderContent(newKey, indent, content1, null);
    }

    renderContent = (newKey, indent, contentFirst, contentSecond) => {
        return (
            <div className='row border' key={newKey}>
                <div className='col-6'>
                    <div className={'col-8 offset-' + indent + ' font-weight-bold'}>
                        {contentFirst}
                    </div>
                </div>
                <div className='col-6'>
                    {contentSecond}
                </div>
            </div>
        );
    }

}
