import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import SignUp from './components/SignUp/SignUp';
import LogIn from './components/SignIn/SignIn';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing/>
        </Route>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/signup">
          <SignUp/>
        </Route>
        <Route path="/signin">
          <LogIn/>
        </Route>        
      </Switch>
    </Router>
  );
}

export default App;
