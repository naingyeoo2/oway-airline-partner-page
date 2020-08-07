import React from "react";
import "./app.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AirlinePartner from "./AirlinePartner";
import Home from "./Home";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/partner/:partnerSlug">
        <AirlinePartner />
      </Route>
      <Route path="*">
        <div>not found route</div>
      </Route>
    </Switch>
  </Router>
);

export default App;
