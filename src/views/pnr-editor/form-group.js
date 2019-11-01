import React from 'react';

export default class FormGroup extends React.Component {

    render() {
        return (
            <div className='row border rounded-sm py-2'>
                <div className='col'>
                    {this.props.header && <h5>{this.props.header}</h5> }
                    {this.props.content}
                </div>
            </div>
        )
    }

}