import React from "react";
import { PersistGate } from 'redux-persist/integration/react'
import Root from "../components/Root/Root.container";
import { Provider } from "react-redux";
import {store, persistor} from '../store'

console.log(persistor)
const App = () => {
  return (
    <div className="App">
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Root />
          </PersistGate>
    </Provider>
    </div>
  );
};

export default App;
