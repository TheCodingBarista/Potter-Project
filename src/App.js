import React, { useState, useEffect } from "react";
import './App.css';
import Queue from './Queue';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src="https://qph.fs.quoracdn.net/main-qimg-2e5b937cb21dee79b45ef769853d2db2-c" alt="great hall" />
      </header>
      <p>The ceremony is about to begin!</p>
      <Queue />
    </div>
  );
}

export default App;
