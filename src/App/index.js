import React from "react";
import Root from "../components/Root/Root.container";
import { Provider } from "react-redux";
import store from "../store";

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Root />
      </Provider>
    </div>
  );
};

export default App;
