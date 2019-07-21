import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import sagas from "./rootSaga";
import rootReducer from "./rootReducer";
import customHistory from "../Router/CustomHistory";
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer(customHistory),
  composeWithDevTools(
    applyMiddleware(sagaMiddleware, routerMiddleware(customHistory))
  )
);

sagaMiddleware.run(sagas);

export default store;
