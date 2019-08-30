import React from 'react';
import HideNulls from './hide-nulls'
import DataValue from './data-value'
import RenderValueBoolean from './render-value-boolean'
import RenderValueNull from './render-value-null'
import RenderValueArray from './render-value-array'
import RenderValueObject from './render-value-object'
import RenderBadge from './render-badge'

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
                        // entries.push(this.renderBadge(key))
                        // entries.push(this.renderArray())
                        entries.push(this.createEntriesFromArray(value, indent + 1, key, parentkey + '_' + key))
                        break;
                    case DataValue._OBJECT:
                        entries.push(this.renderRow(parentkey, key, value, indent))
                        // entries.push(this.renderObject())
                        entries.push(this.createEntriesFromObject(value, indent + 1, parentkey + '_' + key))
                        break;
                }
            }
        });

        return entries;
    }

    createEntriesFromArray = (data, indent, key, parentkey) => {
        let entries = [];

        for (const [index, value] of data.entries()) {
            switch (DataValue.getValueType(value)) {
                case DataValue._NULL:
                case DataValue._BOOLEAN:
                case DataValue._DATA:
                    entries.push(this.renderRow(parentkey, key, value, indent))
                    break;
                case DataValue._ARRAY:
                    break;
                case DataValue._OBJECT:
                    entries.push(this.renderBadge(index))
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
                // content = (<RenderValueNull />)
                break;
            case DataValue._BOOLEAN:
                // content = (<RenderValueBoolean data={value} />)
                break;
            case DataValue._ARRAY:
                // content = (<RenderValueArray />)
                break;
            case DataValue._OBJECT:
                // content = (<RenderValueObject />)
                break;
            case DataValue._DATA:
                // content = value;
                break;
        }

        content = (parentkey + '_' + key);

        return (
            <div className="row border" key={parentkey + '_' + indent + '_' + key}>
                <div className={'offset-' + indent}></div>
                <div className="col font-weight-bold">
                    {key}
                </div>
                <div className="col">
                    {content}
                </div>
            </div>
        );
    }

    renderBadge = (key) => {
        return (
            <div className="row border" key={'ShowPnr_badge_' + key}>
                <div className="col-1"></div>
                <div className="col font-weight-bold">
                    {key} (badge)
                </div>
                <div className="col"></div>
            </div>
        );
    }

    renderArray = () => {
        return (
            <div className="row border">
                <div className="col-1"></div>
                <div className="col font-weight-bold">
                    array
                </div>
                <div className="col">array</div>
            </div>
        );
    }

    renderObject = (indent) => {
        return (
            <div className="row border">
                <div className="col-1"></div>
                <div className="col font-weight-bold">
                    object
                </div>
                <div className="col">object</div>
            </div>
        );
    }

}
