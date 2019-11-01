import React from 'react';
import FormGroup from './form-group';

export default class PnrEditor extends React.Component {

    render() {
        return (
            <div>
                <FormGroup
                    content={this.getContent()}
                />
            </div>
        )
    }

    getContent = () => {
        return (
            <div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
            </div>
        );
    }


}