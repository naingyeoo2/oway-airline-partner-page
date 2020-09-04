import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import { Provider } from 'react-redux';
// import { rootReducer } from "./reducers/index";
import { rootEpic } from './epics/index'
import { createStore, compose, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { loadAirlinesReducer } from "./reducers/loadAirline";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epicMiddleware = createEpicMiddleware();
const store = createStore(loadAirlinesReducer, composeEnhancer(applyMiddleware(epicMiddleware)))

epicMiddleware.run(rootEpic);

render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById("root")
);


