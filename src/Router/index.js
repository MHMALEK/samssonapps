import React from "react";
import { Router, Route } from "react-router-dom";
// import page componentes;
import HomePage from "../components/Pages/HomePage/HomePage.container";
import BuyCardMainPage from "../components/Pages/BuyCard/BuyCardMainPage";

import CardsMainPage from "../components/Pages/BuyCard/CardsMainPage/CardsMainPage.container";
import SubmitInformationPage from "../components/Pages/BuyCard/SubmitInformationPage/SubmitInformationPage.container";
import ConfirmInformationPage from "../components/Pages/BuyCard/ConfirmInformationPage/ConfirmInformationPage.container";
import RestoreCardsPage from "../components/Pages/RestoreCardsPage/RestoreCardsPage.container";
import SignInSSO from "../components/Pages/SSO/SignIn/SignIn.container";
import SSOVerify from "../components/Pages/SSO/Verify/Verify.container";
import PurchasedCardPage from "../components/Pages/BuyCard/PurchasedCardPage";

const createBrowserHistory = require("history").createBrowserHistory;

function AppRouter(props) {
  const history = createBrowserHistory();
  return (
    <Router history={history}>
      <Route path="/sso/signin" exact component={SignInSSO} />
      <Route path="/sso/verify" exact component={SSOVerify} />

      <Route path="/" exact component={HomePage} />
      <Route path="/cards/list" component={CardsMainPage} />
      <Route path="/card/buy" exact component={BuyCardMainPage} />
      <Route path="/card/user-info" exact component={SubmitInformationPage} />
      <Route
        path="/card/confirm-info"
        exact
        component={ConfirmInformationPage}
      />
       <Route
        path="/card/success"
        exact
        component={PurchasedCardPage}
      />
      <Route path="/card/my-cards" exact component={RestoreCardsPage} />
    </Router>
  );
}

export default AppRouter;
