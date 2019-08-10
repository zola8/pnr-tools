import React from 'react';

class GeneralInput extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: this.props.data
        };
    }

    render() {
        return (

            <div className="form-group row">
                <label htmlFor={this.props.id} className="col-sm-2 col-form-label">{this.props.label}</label>
                <div className="col-sm-4">
                    <input className="form-control"
                        id={this.props.id}
                        value={this.state.data}
                        onChange={this.handleChange.bind(this)}
                    />
                </div>
            </div>

        );
    }

    handleChange(e) {
        this.setState({ data: e.target.value });
    }
}

export default GeneralInput;
