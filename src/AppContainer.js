import React from 'react';
import MainNavbar from './views/navbar/main-navbar'
import ShowPnr from './views/show-pnr/show-pnr';
import Modal from './views/modals/modal';
import rawpnr from './testdata/pnr.json';
import { buildPnr } from './common/pnr-operations'

export default class AppContainer extends React.Component {

    constructor() {
        super();

        this.state = {
            pnr: null
        }
    }

    render() {
        return (
            <div className="App">
                <MainNavbar
                    pnr={this.state.pnr}
                    setNewPnr={() => this.setState({ pnr: null })}
                    loadJsonPnr={() => this.setState({ pnr: buildPnr(rawpnr) })}
                />
                <main role="main" className="container">
                    <ShowPnr
                        data={this.state.pnr}
                    />
                    <Modal />
                </main>
            </div>
        );
    }

}
