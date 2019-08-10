import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'popper.js';
import 'bootstrap';
import MainNavbar from './views/navbar/main-navbar'
import PnrEditor from './views/pnr-editor/pnr-editor'
import PnrViewer from './views/pnr-viewer/pnr-viewer'

function App() {
  return (

    <div className="App">
      <MainNavbar />
      <main role="main" className="container-fluid">
        <PnrViewer />


        <br/><br/><br/><br/><br/><br/><br/><br/><br/><hr/>
        <PnrEditor />
      </main>
    </div>

  );
}

export default App;
