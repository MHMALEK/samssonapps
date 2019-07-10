import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import page componentes;
import HomePage from "../components/Pages/HomePage/HomePage.container";
import SamanehPage from "../components/Pages/SamanehPage/SamanehPage.container";

import RegisterCardPage from "../components/Pages/RegisterCardPage/RegisterCardPage.container";
import SubmitInformationPage from "../components/Pages/SubmitInformationPage/SubmitInformationPage.container";
import LoginPage from "../components/Pages/LoginPage/LoginPage.container";

import AboutPage from "../components/Pages/AboutPage";

function AppRouter() {
  return (
    <Router>
      <>
        <Route path="/" exact component={HomePage} />
        <Route path="/card/register" component={RegisterCardPage} />
        <Route path="/card/buy" exact component={SamanehPage} />
        <Route path="/card/user-info" exact component={SubmitInformationPage} />
        <Route path="/register" exact component={LoginPage} />
        <Route path="/test" exact component={AboutPage} />
      </>
    </Router>
  );
}

export default AppRouter;
