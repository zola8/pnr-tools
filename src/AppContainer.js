import React from 'react';
import MainNavbar from './views/navbar/main-navbar'
import ShowPnr from './views/show-pnr/show-pnr';
import Modal from './views/modals/modal';
import SaveModalContent from './views/modals/modal-content-save'
import rawpnr from './testdata/pnr.json';
import { buildPnr } from './common/pnr-operations'

export default class AppContainer extends React.Component {

    constructor() {
        super();

        this.state = {
            pnr: null,
            modal: {
                content: null,
                title: null,
                button: null
            },
            modalCallback: null
        }
    }

    render() {
        return (
            <div className="App">
                <MainNavbar
                    pnr={this.state.pnr}
                    setNewPnr={() => this.setState({ pnr: null })}
                    loadJsonPnr={() => this.setState({ pnr: buildPnr(rawpnr) })}
                    menuSaveAs={() => this.menuSaveAs()}
                />
                <main role="main" className="container">
                    <ShowPnr
                        data={this.state.pnr}
                    />
                    <Modal data={this.state.modal} modalCallback={this.state.modalCallback} />
                </main>
            </div>
        );
    }

    menuSaveAs = () => {
        this.setState({
            modal: {
                content: (<SaveModalContent />),
                title: "Save PNR as...",
                button: "Save"
            },
            modalCallback: this.menuSaveAsCallback
        });

        //saveJsonToBrowser(this.props.pnr);
        //saveXmlToBrowser(this.props.pnr);
    }

    menuSaveAsCallback = (data) => {
        console.log("--- menuSaveAsCallback.... ", data);
    }

}
