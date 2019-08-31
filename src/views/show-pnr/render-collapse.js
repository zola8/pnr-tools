import React from 'react';

export default class RenderCollapse extends React.Component {

    render() {
        return (
            <div key={this.props.collapseid}>
                <div className='row mt-2 mb-2'>
                    <a className='col-12 btn btn-outline-dark square' data-toggle='collapse'
                        href={'#' + this.props.collapseid} role='button' aria-expanded='false' aria-controls={this.props.collapseid}>
                        {this.props.title}
                    </a>
                </div>
                <div className='collapse show multi-collapse-view' id={this.props.collapseid}>
                    {this.props.content}
                </div>
            </div>
        );
    }

}
