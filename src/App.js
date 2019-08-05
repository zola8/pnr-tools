import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'popper.js';
import 'bootstrap';
import MainNavbar from './components/navbar/main-navbar'
import AlmaInput from './components/elements/main/alma'

function App() {
  return (

    <div className="App">
      <MainNavbar />

      <main role="main" className="container-fluid">
          <h1>Bootstrap starter template</h1>

          <br />
          <AlmaInput />

      </main>

    </div>

  );
}

export default App;
