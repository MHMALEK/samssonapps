import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import page componentes;
import HomePage from "../components/pagesComponent/HomePage";
import AboutPage from "../components/pagesComponent/AboutPage";

function AppRouter() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={HomePage} />
      </div>
    </Router>
  );
}

export default AppRouter;
