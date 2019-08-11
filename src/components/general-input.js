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
                <label className="col-sm-3 col-form-label">{this.props.label}</label>
                <div className="col-sm-9">
                    <input className="form-control"
                        value={this.state.data}
                        onChange={this.handleChange.bind(this)}
                    />
                </div>
            </div>

        );
    }

    handleChange(event) {
        this.setState({ data: event.target.value });
        console.log(this.props.label + " = " + this.state.data);
    }
}

export default GeneralInput;
