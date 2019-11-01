import React from 'react';

export default class RenderValueBoolean extends React.Component {

    render() {
        if (this.props.data)
            return (
                <div className="form-group form-check mb-0">
                    <input type="checkbox" className="form-check-input" defaultChecked disabled="disabled" />
                    <label className="form-check-label text-success">true</label>
                </div>
            );
        else
            return (
                <div className="form-group form-check mb-0">
                    <input type="checkbox" className="form-check-input" disabled="disabled" />
                    <label className="form-check-label text-danger">false</label>
                </div>
            );
    }

}
