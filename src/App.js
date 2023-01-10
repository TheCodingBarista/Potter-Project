import React, { useState, useEffect } from "react";
import './App.css';
import Queue from './Queue';
import Header from './Header';
import sprite from "./sprite.svg";


function App() {
  return (
    <div className="app">
      <Header />
      <Queue />
    </div>
  );
}

export default App;
