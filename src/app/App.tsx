import React from "react";
import { Home } from '../home/components/Home';
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
