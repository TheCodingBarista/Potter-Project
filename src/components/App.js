import React from 'react';
import { Route, Switch } from "react-router-dom";
import NavMenu from './NavMenu';
import Home from './Home';
import Sorting from './Sorting';
import StudentsPage from './StudentsPage';
import StudentForm from './StudentForm';
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
        <Route exact path="/students/new">
          <StudentForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
