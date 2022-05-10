import React, { useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const API = "http://localhost:3000/students";

function App() {

  useEffect(() => {
    fetch(API)
      .then((response) => response.json);
  })

  return (
    <div className="App">
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
  );
}

export default App;
