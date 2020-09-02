import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./app.scss";

import AirlinePartner from "./AirlinePartner";
import Home from "./Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/partner/:partnerSlug">
          <AirlinePartner />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route excat path="*">
          <div>not found route</div>
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
