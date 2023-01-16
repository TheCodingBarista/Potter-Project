import React, { useState, useEffect } from "react";
import Queue from './Queue';
import Header from './Header';
import './App.css';


function App() {
  return (
    <div className="app">
      <Header />
      <Queue />
    </div>
  );
}

export default App;
