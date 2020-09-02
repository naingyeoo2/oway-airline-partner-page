// import { createStore, compose, applyMiddleware } from "redux";
// import { createEpicMiddleware } from "redux-observable";
// import { rootReducer } from "../reducers/index";
// import { rootEpic } from '../epics/index'

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const epicMiddleware = createEpicMiddleware()

// export default function configureStore(){
//     const store = createStore(rootReducer, composeEnhancer(applyMiddleware(epicMiddleware)));
//     epicMiddleware.run(rootEpic);
//     return store;
// }