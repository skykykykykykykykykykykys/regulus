import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import NewCase from "./components/NewCase";
import OptionsBoard from "./components/OptionsBoard";
import Header from "./components/Header";
import Footer from './components/Footer';




function App() {
  
  return (
    <div>
      <Header/>
      <div>
        <NewCase/>
      </div>
      <Footer/>
    </div>
  );

  /*const isNewCase = true;

  function renderNewCase() {
    if (isNewCase === true) {
      return (
          <NewCase />
      );
    } else {
      return <OptionsBoard/>;
    }
  }

  return (<div className="container">{
      renderNewCase()
    }</div>);
    */
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
