import { createStore, applyMiddleware } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

import sagas from "./rootSaga";
import rootReducer from "./rootReducer";

// redux persist config
const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

// saga config
const sagaMiddleware = createSagaMiddleware();

  let store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))
  sagaMiddleware.run(sagas);
  let persistor = persistStore(store)
  export { store, persistor }
