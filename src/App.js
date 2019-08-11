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
      <main role="main" className="container">
        <PnrEditor />
      </main>
    </div>

  );
}

export default App;
