import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import page componentes;
import HomePage from "../components/pagesComponent/HomePage/HomePage.container";
import RegisterCardPage from "../components/pagesComponent/RegisterCardPage/RegisterCardPage.container";
import BuyCardPage from "../components/pagesComponent/BuyCardPage/BuyCardPage.container";
import LoginPage from "../components/pagesComponent/LoginPage/LoginPage.container";

import AboutPage from "../components/pagesComponent/AboutPage";

function AppRouter() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={HomePage} />
        <Route path="/card/register" component={RegisterCardPage} />
        <Route path="/card/buy" exact component={BuyCardPage} />
        <Route path="/register" exact component={LoginPage} />
        <Route path="/test" exact component={AboutPage} />
      </div>
    </Router>
  );
}

export default AppRouter;
