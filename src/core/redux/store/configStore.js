import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose } from "redux";

import rootReducer from "../reducers";
import rootSaga from "../sagas";

const composeEnhancers =
  typeof window === "object" && window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]
    ? window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]({})
    : compose;

const sagaMiddleware = createSagaMiddleware();
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
const store = createStore(rootReducer, enhancer);
sagaMiddleware.run(rootSaga);

export default store;
