import React from 'react';

export default class MainNavbar extends React.Component {

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
                            <a className='nav-link dropdown-toggle' href='/#' id='navbarDropdown1' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                                Operations
                            </a>
                            <div className='dropdown-menu' aria-labelledby='navbarDropdown1'>
                                <h6 className='dropdown-header'>File operations</h6>
                                <a className='dropdown-item' href='/#' onClick={() => this.props.menuNewCallback()}>New</a>
                                <a className='dropdown-item' href='/#' data-toggle='modal' data-target='#LoadModal'>
                                    Load from...
                                </a>
                                <a className={'dropdown-item' + (this.props.isPnrEmpty ? ' disabled' : '')}
                                    href='/#' data-toggle='modal' data-target='#SaveModal'>
                                    Save as...
                                </a>
                                <div className='dropdown-divider'></div>
                                <a className='dropdown-item' href='/#' onClick={() => this.props.menuLogToBrowserCallback()}>Log to browser</a>
                            </div>
                        </li>

                        {!this.props.isPnrEmpty && this.renderActionMenu()}

                    </ul>
                </div>
            </nav>
        );
    }

    renderActionMenu = () => {
        return (
        <li className='nav-item dropdown'>
            <a className='nav-link dropdown-toggle' href='/#' id='navbarDropdown2' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                Actions
                            </a>
            <div className='dropdown-menu' aria-labelledby='navbarDropdown2'>
                <h6 className='dropdown-header'>Base actions</h6>

                <a className={'dropdown-item'} href='/#' onClick={() => this.props.increaseCrsVersionNumberCallback()}>Increase crsVersionNumber</a>

                <div className="dropdown-divider"></div>
                <h6 className='dropdown-header'>Object actions</h6>

                <a className={'dropdown-item'} href='/#' onClick={() => this.props.addEotOriginatorCallback()}>Add / clear eotOriginator</a>
                <a className={'dropdown-item'} href='/#' onClick={() => this.props.addRespoCallback()}>Add / clear respo</a>
                <a className={'dropdown-item'} href='/#' onClick={() => this.props.addGroupCallback()}>Add / clear group</a>
                <a className={'dropdown-item'} href='/#' onClick={() => this.props.addTourCodeCallback()}>Add / clear tourCode</a>

                <div className="dropdown-divider"></div>
                <h6 className='dropdown-header'>Array actions</h6>

                <a className={'dropdown-item'} href='/#' onClick={() => this.props.clearPnrKeysCallback()}>Add / clear pnrKeys</a>
                <a className={'dropdown-item'} href='/#' onClick={() => this.props.clearNamesCallback()}>Add / clear names</a>
                <a className={'dropdown-item'} href='/#' onClick={() => this.props.clearSegmentsCallback()}>Add / clear segments</a>
                <a className={'dropdown-item'} href='/#' onClick={() => this.props.clearOsisCallback()}>Add / clear osis</a>
                <a className={'dropdown-item'} href='/#' onClick={() => this.props.clearRemarksCallback()}>Add / clear remarks</a>
                <a className={'dropdown-item'} href='/#' onClick={() => this.props.clearContactsCallback()}>Add / clear contacts</a>
                <a className={'dropdown-item'} href='/#' onClick={() => this.props.clearAddressesCallback()}>Add / clear addresses</a>
                <a className={'dropdown-item'} href='/#' onClick={() => this.props.clearSsrsCallback()}>Add / clear ssrs</a>
                <a className={'dropdown-item'} href='/#' onClick={() => this.props.clearSksCallback()}>Add / clear sks</a>
                <a className={'dropdown-item'} href='/#' onClick={() => this.props.clearTicketsCallback()}>Add / clear tickets</a>
                <a className={'dropdown-item'} href='/#' onClick={() => this.props.clearFormOfPaymentsCallback()}>Add / clear formOfPayments</a>
                <a className={'dropdown-item'} href='/#' onClick={() => this.props.clearDcsDataListCallback()}>Add / clear dcsDataList</a>
            </div>
        </li>
        )
    }

}
