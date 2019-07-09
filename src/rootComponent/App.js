import React from "react";
import AppRouter from "../appRouter";
import { Provider } from "react-redux";
import store from "../store";

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  );
};

export default App;
