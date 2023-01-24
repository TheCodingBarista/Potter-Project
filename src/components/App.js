import React from 'react';
import { Route, Switch } from "react-router-dom";
import Sorting from './Sorting';
import Home from './Home';
import StudentsPage from './StudentsPage';
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
        <Route exact path="/students">
          <StudentsPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
