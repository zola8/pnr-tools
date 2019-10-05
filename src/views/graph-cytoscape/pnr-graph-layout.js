import React from 'react';
import Cytoscape from 'react-cytoscapejs';

export default class PnrGraphLayout extends React.Component {

    render() {
        const elements = [
            { data: { id: 'one', label: 'Node 1' }, position: { x: 0, y: 0 } },
            { data: { id: 'two', label: 'Node 2' }, position: { x: 100, y: 0 } },
            { data: { source: 'one', target: 'two', label: 'Edge from Node1 to Node2' } }
        ];

        const style = {
            width: '800px',
            height: '600px'
        }

        return (
            <div className="row jumbotron p-4">
                <div className="col-12">
                    <h1 className="display-4">PNR layout</h1>
                    <hr className="my-4" />
                    <div className="bg-info mx-auto" style={style}>
                        <Cytoscape elements={elements} style={style} />
                    </div>
                </div >
            </div >
        );
    }


}