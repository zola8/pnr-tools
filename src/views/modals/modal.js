import React from 'react';

export default class Modal extends React.Component {

    render() {
        return (
            <div className="modal fade" id="commonModal" tabIndex="-1" role="dialog" aria-labelledby="modalTitle" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modalTitle">
                                {this.props.data.title}
                            </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {this.props.data.content}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => this.props.modalCallback(this.props.data.content)}>
                                {this.props.data.button}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}