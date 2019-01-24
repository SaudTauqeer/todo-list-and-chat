//Imports
import React, { Component } from "react";
import "typeface-roboto";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
//Router Components
import LandingPage from "./Components/LandingPage";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
