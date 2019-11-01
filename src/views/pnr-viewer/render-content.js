import React from 'react';

export default class RenderContent extends React.Component {

    render() {
        return (
            <div className='row border' key={this.props.newKey}>
                <div className='col-6'>
                    <div className={'col-8 offset-' + this.props.indent + ' font-weight-bold'}>
                        {this.props.contentFirst}
                    </div>
                </div>
                <div className='col-6'>
                    {this.props.contentSecond}
                </div>
            </div>
        );
    }

}
