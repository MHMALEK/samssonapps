import React from "react";
import ConfirmInformationPagePresentation from "./ConfirmInformationPage.presentation";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { confirmInformationHandlerAction } from "../../../../store/Modules/Cards/Actions";
const ConfirmInformationPage = props => {
  const { history, confirmInformationHandlerAction } = props;
  const navBarStepsData = [
    {
      id: 1,
      index: 1,
      title: "ثبت اطلاعات فردی",
      done: true
    },
    {
      id: 2,
      index: 2,
      title: "تایید اطلاعات",
      done: false
    },
    {
      id: 3,
      index: 3,
      title: "دریافت کارت اعتباری",
      done: false
    }
  ];

  const {
      data,
      redirectToIpg,
      redirectToIpgUrl
  } = props;

  return (
    !redirectToIpg ? (
    <ConfirmInformationPagePresentation
      navBarSteps={navBarStepsData}
      history={history}
      data={data}
      confirmInformationHandlerAction={confirmInformationHandlerAction}
    />) : 
    window.location.href = redirectToIpgUrl
  );
};

const mapStateToProps = state => {
  return {
    data: state.Cards.boughtCard.buyer,
    redirectToIpg: state.Cards.IPGBankUrl === "" ? false : true,
    redirectToIpgUrl: state.Cards.IPGBankUrl
  };
};

const mapDispatchToProps = dispatch => ({
  confirmInformationHandlerAction: () => {
    dispatch(confirmInformationHandlerAction());
  }
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ConfirmInformationPage)
);
