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
        <Route exact path="/sorting">
          <Sorting />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
