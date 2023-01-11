import React, { useState, useEffect } from "react";
import './App.css';
import Queue from './Queue';
import Header from './Header';


function App() {
  return (
    <div className="app">
      <Header />
      <Queue />
    </div>
  );
}

export default App;
