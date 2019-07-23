import React from "react";
import SubmitInformationPagePresentation from "./SubmitInformationPage.presentation";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { submitInformationHandlerAction } from "../../../../store/Modules/Cards/Actions";
class SubmitInformationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameValue: "",
      familyValue: "",
      certificateIdValue: "",
      NationalityValue: "",
      nationalityIdValue: "",
      phoneNumberValue: ""
    };
  }

  allDataIsValid() {
    const {
      nameValue,
      familyValue,
      certificateIdValue,
      NationalityValue,
      nationalityIdValue,
      phoneNumberValue,
      foreignersCodeValue
    } = this.state;
    if (
      nameValue &&
      familyValue &&
      certificateIdValue &&
      nationalityIdValue &&
      (NationalityValue || foreignersCodeValue) &&
      phoneNumberValue
    ) {
      this.setState({
        allDataIsValid: true
      });
    } else {
      this.setState({
        allDataIsValid: false
      });
    }
  }
  render() {
    const {
      submitInformationHandlerAction,
      submitedInformationOnForm,
      history
    } = this.props;

    return (
      <SubmitInformationPagePresentation
        submitInformationHandlerAction={submitInformationHandlerAction}
        submitedInformationOnForm={submitedInformationOnForm}
        history={history}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  submitInformationHandlerAction: formData => {
    dispatch(submitInformationHandlerAction(formData));
  }
});

const mapStateToProps = state => {
  return {
    submitedInformationOnForm: state.Cards.purchasedCard.buyer
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SubmitInformationPage)
);
