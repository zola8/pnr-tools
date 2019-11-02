import React from 'react';

export default class FormGroup extends React.Component {

    render() {
        let borderStyle = this.props.border ? this.props.border : '';
        let headerbg = this.props.headerbg ? this.props.headerbg : '';

        return (
            <div className={'row card my-2 ' + borderStyle}>
                {
                    this.props.header &&

                    <div className={'card-header pb-1 ' + headerbg}>
                        <h5>{this.props.header}</h5>
                    </div>
                }
                <div className="card-body">
                    {this.props.children}
                </div>
            </div>
        )
    }

}
