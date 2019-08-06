import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'popper.js';
import 'bootstrap';
import MainNavbar from './components/navbar/main-navbar'
import PnrViewer from './components/elements/pnr-viewer'

function App() {
  return (

    <div className="App">
      <MainNavbar />
      <main role="main" className="container-fluid">
        <PnrViewer />
      </main>
    </div>

  );
}

export default App;
