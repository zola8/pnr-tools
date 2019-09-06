import React from 'react';

export default class SaveModalContent extends React.Component {

    render() {
        return (
            <div id="SaveModalContent">
                <div className="form-group">
                    <label htmlFor="SaveModalContentSelect1">File type</label>
                    <select className="form-control" id="SaveModalContentSelect1">
                        <option>.json</option>
                        <option>.xml</option>
                    </select>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="SaveModalContentCheck1" />
                    <label className="form-check-label" htmlFor="SaveModalContentCheck1">
                        Minified
                    </label>
                </div>
            </div>
        )
    }

}