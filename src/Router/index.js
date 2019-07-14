import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

// import page componentes;
import HomePage from "../components/Pages/HomePage/HomePage.container";
import BuyCardMainPage from "../components/Pages/BuyCardMainPage/BuyCardMainPage.container";

import CardsMainPage from "../components/Pages/CardsMainPage/CardsMainPage.container";
import SubmitInformationPage from "../components/Pages/SubmitInformationPage/SubmitInformationPage.container";
import LoginPage from "../components/Pages/LoginPage/LoginPage.container";

import AboutPage from "../components/Pages/AboutPage";
import RestoreCardsPage from "../components/Pages/RestoreCardsPage/RestoreCardsPage.container";

function AppRouter(props) {
  const history = createBrowserHistory();
  return (
    <Router history={history}>
      <Route path="/" exact component={HomePage} />
      <Route path="/cards/list" component={CardsMainPage} />
      <Route path="/card/buy" exact component={BuyCardMainPage} />
      <Route path="/card/user-info" exact component={SubmitInformationPage} />
      <Route path="/card/my-cards" exact component={RestoreCardsPage} />

      <Route path="/register" exact component={LoginPage} />
      <Route path="/test" exact component={AboutPage} />
    </Router>
  );
}

export default AppRouter;
