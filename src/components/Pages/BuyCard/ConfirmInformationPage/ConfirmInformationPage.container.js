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
    nameValue,
    familyValue,
    certificateIdValue,
    NationalityValue,
    nationalityIdValue,
    phoneNumberValue
  } = props;

  return (
    <ConfirmInformationPagePresentation
      navBarSteps={navBarStepsData}
      history={history}
      nameValue={nameValue}
      familyValue={familyValue}
      certificateIdValue={certificateIdValue}
      NationalityValue={NationalityValue}
      nationalityIdValue={nationalityIdValue}
      phoneNumberValue={phoneNumberValue}
      confirmInformationHandlerAction={confirmInformationHandlerAction}
    />
  );
};

const mapStateToProps = state => {
  return {
    nameValue: state.Cards.submitedInformationOnForm.nameValue,
    familyValue: state.Cards.submitedInformationOnForm.familyValue,
    certificateIdValue:
      state.Cards.submitedInformationOnForm.certificateIdValue,
    NationalityValue: state.Cards.submitedInformationOnForm.NationalityValue,
    nationalityIdValue:
      state.Cards.submitedInformationOnForm.nationalityIdValue,
    phoneNumberValue: state.Cards.submitedInformationOnForm.phoneNumberValue
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
