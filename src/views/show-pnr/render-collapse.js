import React from 'react';
import DeleteButton from './delete-button';

export default class RenderCollapse extends React.Component {

    render() {
        return (
            <div key={this.props.collapseid}>
                <div className='row mt-2 mb-2'>
                    <a className='col-12 btn btn-outline-dark square' data-toggle='collapse'
                        href={this.props.disabled ? '/#' : '#' + this.props.collapseid} 
                        role='button' aria-expanded='false' aria-controls={this.props.collapseid}>
                        {this.props.title}
                        {!this.props.disabled && <DeleteButton />}
                    </a>
                </div>
                <div className={this.props.disabled ? 'show' : 'collapse show multi-collapse-view'} id={this.props.collapseid}>
                    {this.props.content}
                </div>
            </div>
        );
    }

}
