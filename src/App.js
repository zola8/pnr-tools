import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'popper.js';
import 'bootstrap';
import MainNavbar from './components/navbar/main-navbar'
import PnrEditor from './components/elements/pnr-editor'

function App() {
  return (

    <div className="App">
      <MainNavbar />
      <main role="main" className="container-fluid">
        <PnrEditor />
      </main>
    </div>

  );
}

export default App;
