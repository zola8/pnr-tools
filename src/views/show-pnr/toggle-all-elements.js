import React from 'react';

class ToggleAllElements extends React.Component {

    render() {
        return (
            <div className="alert alert-dark ml-3" role="alert">
                <a className="text-decoration-none text-body" href="/#" role="button" data-toggle="collapse" data-target=".multi-collapse-view">
                    Toggle all elements
                </a>
            </div>
        );
    }

}

export default ToggleAllElements;
