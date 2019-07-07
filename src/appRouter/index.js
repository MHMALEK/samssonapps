import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import page componentes;
import HomePage from "../components/pagesComponent/HomePage";
import RegisterationMainPage from "../components/pagesComponent/RegisterationMainPage";
import AboutPage from "../components/pagesComponent/AboutPage";

function AppRouter() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={HomePage} />
        <Route path="/register-main" component={RegisterationMainPage} />
        <Route path="/test" exact component={AboutPage} />
      </div>
    </Router>
  );
}

export default AppRouter;
