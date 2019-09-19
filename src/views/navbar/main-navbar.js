import React from 'react';

export default class MainNavbar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className='navbar navbar-expand-md navbar-dark bg-dark fixed-top'>
                <a className='navbar-brand' href='/#'>PNR Tools</a>
                <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarMain' aria-controls='navbarMain' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>

                <div className='collapse navbar-collapse' id='navbarMain'>
                    <ul className='navbar-nav mr-auto'>
                        <li className='nav-item dropdown'>
                            <a className='nav-link dropdown-toggle' href='#' id='navbarDropdown1' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                                Operations
                            </a>
                            <div className='dropdown-menu' aria-labelledby='navbarDropdown1'>
                                <h6 className='dropdown-header'>File operations</h6>
                                <a className='dropdown-item' href='/#' onClick={() => this.props.menuNewCallback()}>New</a>
                                <a className='dropdown-item' href='/#' data-toggle='modal' data-target='#LoadModal'>
                                    Load from...
                                </a>
                                <a className={'dropdown-item' + (this.props.isPnrEmpty ? '' : ' disabled')}
                                    href='/#' data-toggle='modal' data-target='#SaveModal'>
                                    Save as...
                                </a>
                                <div className='dropdown-divider'></div>
                                <a className='dropdown-item' href='/#' onClick={() => this.props.menuLogToBrowserCallback()}>Log to browser</a>
                            </div>
                        </li>
                        <li className='nav-item dropdown'>
                            <a className='nav-link dropdown-toggle' href='#' id='navbarDropdown2' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                                Actions
                            </a>
                            <div className='dropdown-menu' aria-labelledby='navbarDropdown2'>
                                <h6 className='dropdown-header'>Base actions</h6>
                                <a className='dropdown-item' href='/#' onClick={() => this.props.clearPnrBaseCallback()}>Add / clear PNR base</a>
                                <a className={'dropdown-item' + (this.props.isPnrEmpty ? '' : ' disabled')} 
                                    href='/#' onClick={() => this.props.increaseCrsVersionNumberCallback()}>Increase crsVersionNumber</a>
                                <div className="dropdown-divider"></div>

                                <h6 className='dropdown-header'>Object actions</h6>
                                <a className={'dropdown-item' + (this.props.isPnrEmpty ? '' : ' disabled')} 
                                    href='/#' >Add / clear eotOriginator...</a>
                                <a className={'dropdown-item' + (this.props.isPnrEmpty ? '' : ' disabled')} 
                                    href='/#'>Add / clear respo...</a>
                                <a className={'dropdown-item' + (this.props.isPnrEmpty ? '' : ' disabled')} 
                                    href='/#'>Add / clear group...</a>
                                <div className="dropdown-divider"></div>

                                <h6 className='dropdown-header'>Array actions</h6>
                                <a className={'dropdown-item' + (this.props.isPnrEmpty ? '' : ' disabled')} 
                                    href='/#'>Modify pnr keys...</a>
                                <a className={'dropdown-item' + (this.props.isPnrEmpty ? '' : ' disabled')} 
                                    href='/#'>Modify names...</a>
                                <a className={'dropdown-item' + (this.props.isPnrEmpty ? '' : ' disabled')} 
                                    href='/#'>Modify segments...</a>
                                <a className={'dropdown-item' + (this.props.isPnrEmpty ? '' : ' disabled')} 
                                    href='/#'>Modify osis...</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }

}
