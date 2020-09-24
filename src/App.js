import React, { useState } from 'react';
import './App.css';
import Button from './components/button/Button';
import { useStateValue } from './context/StateProvider';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, Redirect
} from "react-router-dom";
import Home from './components/home/Home';

function App() {
  const [{user}, dispatch] = useStateValue();
  
  console.log('User DATA ...', user)
  return (
    <Router>
      <Switch>

      <Route path="/home"
          render={() => user ? (
            <Home />
          ) : (
            <Redirect to="/" />
          )}
        />

        <Route path="/home" component={Home} />

        <Route path="/"
          render={() => user ? (
            <Redirect to="/home" />
          ) : (
            <Button />
          )}
        />

      

        <Route path="/" component={Button} exact />
      </Switch>
    </Router>
  );
}

export default App;
