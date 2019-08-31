import React from 'react';
import HideNulls from './hide-nulls'
import DataValue from './data-value'
import RenderValueBoolean from './render-value-boolean'
import RenderValueNull from './render-value-null'
import RenderContent from './render-content'
import ToggleAllElements from './toggle-all-elements'
import RenderCollapse from './render-collapse'

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
                    <ToggleAllElements />
                </div>
                <RenderCollapse title='PNR' content={this.createEntriesFromObject(this.props.data, 0, 'ShowPnr')} collapseid='collapse_pnr' />
                <br />
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
                        let contentRow1 = this.renderRow(parentkey, key, value, indent);
                        let objectEntries1 = this.createEntriesFromArray(value, indent + 1, parentkey + '_' + key);
                        let content1 = (<div> {contentRow1} {objectEntries1} </div>);
                        let collapseDiv1 = (<RenderCollapse title={key} content={content1} collapseid={'collapse_' + key} key={'collapse_' + key} />);

                        if (indent == 0) {
                            entries.push(collapseDiv1);
                        } else {
                            entries.push(contentRow1);
                            entries.push(objectEntries1);
                        }
                        break;
                    case DataValue._OBJECT:
                        let contentRow2 = this.renderRow(parentkey, key, value, indent);
                        let objectEntries2 = this.createEntriesFromObject(value, indent + 1, parentkey + '_' + key);
                        let content2 = (<div> {contentRow2} {objectEntries2} </div>);
                        let collapseDiv2 = (<RenderCollapse title={key} content={content2} collapseid={'collapse_' + key} key={'collapse_' + key} />);

                        entries.push(collapseDiv2);
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
                content = (<div className="text-info">array</div>)
                break;
            case DataValue._OBJECT:
                content = (<div className="text-info">object</div>)
                break;
            case DataValue._DATA:
                content = value;
                break;
        }

        let newKey = key == null ? parentkey : parentkey + '_' + key;

        return (<RenderContent newKey={newKey} indent={indent} contentFirst={key} contentSecond={content} key={newKey} />);
    }

    renderBadge = (parentkey, index, indent) => {
        let newKey = parentkey + '_' + index;
        let content = (<span className='badge badge-pill badge-secondary'>#{index}</span>)

        return (<RenderContent newKey={newKey} indent={indent} contentFirst={content} contentSecond={null} key={newKey} />);
    }

}
