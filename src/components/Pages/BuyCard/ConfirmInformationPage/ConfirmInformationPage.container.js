import React from "react";
import ConfirmInformationPagePresentation from "./ConfirmInformationPage.presentation";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {
  confirmInformationHandlerAction,
  backFromConfirmInformationAction
} from "../../../../store/Modules/Cards/Actions";

const ConfirmInformationPage = props => {
  const {
    data,
    redirectToIpg,
    redirectToIpgUrl,
    backFromConfirmInformation,
    history,
    confirmInformationHandlerAction,
    navBarSteps
  } = props;

  return !redirectToIpg ? (
    <ConfirmInformationPagePresentation
      navBarSteps={navBarSteps}
      history={history}
      data={data}
      confirmInformationHandlerAction={confirmInformationHandlerAction}
      backFromConfirmInformation={backFromConfirmInformation}
    />
  ) : (
    (window.location.href = redirectToIpgUrl)
  );
};

const mapStateToProps = state => {
  return {
    data: state.Cards.purchasedCard.buyer,
    redirectToIpg: state.Cards.IPGBankUrl === "" ? false : true,
    redirectToIpgUrl: state.Cards.IPGBankUrl,
    navBarSteps: state.UI.navBarSteps
  };
};

const mapDispatchToProps = dispatch => ({
  confirmInformationHandlerAction: () => {
    dispatch(confirmInformationHandlerAction());
  },
  backFromConfirmInformation: () => {
    dispatch(backFromConfirmInformationAction());
  }
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ConfirmInformationPage)
);
