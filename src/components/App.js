import React from "react";
import Queue from './Queue';
import Header from './Header';
import NavMenu from './NavMenu';
import '../App.css';


function App() {

  return (
    <div class="app">
      <NavMenu />
      <Header />
      <br></br>
      <Queue />
    </div>
  );
}

export default App;
