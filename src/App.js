import React, { useState, useEffect } from "react";
import './App.css';
import Queue from './Queue';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>The ceremony is about to begin!</h1>
        <br></br>
        <img src="https://qph.fs.quoracdn.net/main-qimg-2e5b937cb21dee79b45ef769853d2db2-c" alt="great hall" />
      </header>
      <Queue />
    </div>
  );
}

export default App;
