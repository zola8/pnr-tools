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
            pnr: null,
            modalContent: null
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
                    <Modal content={this.state.modalContent} />
                </main>
            </div>
        );
    }

    menuSaveAs = () => {
        let newModalContent = (<div>new modal content...</div>)
        this.setState({modalContent: newModalContent});
        console.log("--- save as... calling modal with: ", newModalContent);

        //saveJsonToBrowser(this.props.pnr);
        //saveXmlToBrowser(this.props.pnr);
    }

}
