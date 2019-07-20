import React from "react";
import Root from "../components/Root/Root.container";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "../store";

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <ToastContainer />
        <Root />
      </Provider>
    </div>
  );
};

export default App;
