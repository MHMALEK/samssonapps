import {
    createStore,
    applyMiddleware
} from "redux";
import {
    composeWithDevTools
} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './Modules/Users/Sagas'

import rootReducer from "./rootReducer";


const sagaMiddleware = createSagaMiddleware()



const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    )
);

sagaMiddleware.run(rootSaga)


export default store;