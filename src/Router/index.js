import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { ConnectedRouter } from "connected-react-router";

import { connect } from "react-redux";
import PrivateRoute from "./PrivateRoute";
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
import customHistory from "./CustomHistory";
import AboutPage from "../components/Pages/AboutPage";
import LoginWithCardPage from "../components/Pages/Course/Login";
import RegisterWithCardPage from "../components/Pages/Course/Register/RegisterPage";

function AppRouter(props) {
  return (
    <ConnectedRouter history={customHistory}>
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={300}>
              <Switch location={location}>
                <Route path="/test" exact component={AboutPage} />

                <Route path="/sso/signin" exact component={SignInSSO} />
                <Route path="/sso/verify" exact component={SSOVerify} />
                <Route path="/" exact component={HomePage} />
                <PrivateRoute
                  path="/card/list"
                  exact
                  ComponentName={CardsMainPage}
                  shouldRefresh={false}
                />
                <PrivateRoute
                  path="/card/buy"
                  exact
                  ComponentName={BuyCardMainPage}
                  shouldRefresh={true}
                />
                <PrivateRoute
                  path="/card/user-info"
                  exact
                  ComponentName={SubmitInformationPage}
                  shouldRefresh={true}
                />
                <PrivateRoute
                  path="/card/confirm"
                  exact
                  ComponentName={ConfirmInformationPage}
                  shouldRefresh={true}
                />
                <Route
                  path="/card/success/:transactionId"
                  component={PurchasedCardPage}
                />
                <PrivateRoute
                  path="/card/my-cards"
                  exact
                  ComponentName={RestoreCardsPage}
                  shouldRefresh={false}
                />
                <Route
                  path="/course/login"
                  exact
                  component={LoginWithCardPage}
                />
                <Route
                  path="/course/register"
                  exact
                  component={RegisterWithCardPage}
                />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </ConnectedRouter>
  );
}

export default connect(
  null,
  null
)(AppRouter);
