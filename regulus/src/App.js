import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from "./components/Header";
import Footer from "./components/Footer";
import NewCase from "./components/NewCase";
import OptionsBoard from "./components/OptionsBoard";

var isNewCase = false;


function App() {
  return <div className="container">{renderNewCase()}</div>
}

function renderNewCase() {
  if (isNewCase === true) {
    return <NewCase />
  } else {
    return <OptionsBoard/>;
  }
}


/**
 * <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
 */

export default App;
