import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./app.scss";

import AirlinePartner from "./AirlinePartner";
import Home from "./Home";
import { Provider } from "react-redux";
import configureStore from "../stores";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}
export default App;
