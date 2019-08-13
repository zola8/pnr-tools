import React from 'react';
import MainNavbar from './views/navbar/main-navbar'
import pnr from './testdata/pnr.json';
import pnrinfo from './testdata/pnrinfo.json';

export default class AppContainer extends React.Component {

    constructor() {
        super();

        this.state = {
            pnr: null,
            pnrinfo: null
        }

        this.loadPnr(this.state);
    }

    render() {
        console.log("pnr: ", this.state.pnr);
        console.log("pnrinfo: ", this.state.pnrinfo);

        return (
            <div className="App">
                <MainNavbar />
                <main role="main" className="container">

                </main>
            </div>
        );
    }

    loadPnr = (state) => {
        state.pnr = pnr;
        state.pnrinfo = pnrinfo;
    }

}
