import React from 'react';
import { Route, Switch } from "react-router-dom";
import Queue from './Queue';
import Home from './Home';
import NavMenu from './NavMenu';
import '../App.css';


function App() {

  return (
    <div className="app">
      <NavMenu />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/form">
        </Route>
        <Route exact path="/queue">
          <Queue />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
