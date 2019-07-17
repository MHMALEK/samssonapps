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
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleFamilyChange = this.handleFamilyChange.bind(this);
    this.handleCertificateIdChange = this.handleCertificateIdChange.bind(this);
    this.handleNationalityChange = this.handleNationalityChange.bind(this);
    this.handleNationalityIdChange = this.handleNationalityIdChange.bind(this);
    this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
  }
  handleNameChange(e) {
    this.setState({
      nameValue: e.target.value
    });
  }
  handleFamilyChange(e) {
    this.setState({
      familyValue: e.target.value
    });
  }
  handleCertificateIdChange(e) {
    this.setState({
      certificateIdValue: e.target.value
    });
  }
  handleNationalityChange(e) {
    this.setState({
      NationalityValue: e.target.value
    });
  }
  handleNationalityIdChange(e) {
    this.setState({
      nationalityIdValue: e.target.value
    });
  }
  handlePhoneNumberChange(e) {
    this.setState({
      phoneNumberValue: e.target.value
    });
  }
  render() {
    const { history, submitInformationHandlerAction } = this.props;
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
    } = this.state;

    return (
      <SubmitInformationPagePresentation
        navBarSteps={navBarStepsData}
        history={history}
        handleNameChange={e => this.handleNameChange(e)}
        nameValue={nameValue}
        handleFamilyChange={e => this.handleFamilyChange(e)}
        familyValue={familyValue}
        handleCertificateIdChange={e => this.handleCertificateIdChange(e)}
        certificateIdValue={certificateIdValue}
        handleNationalityChange={e => this.handleNationalityChange(e)}
        NationalityValue={NationalityValue}
        handleNationalityIdChange={e => this.handleNationalityIdChange(e)}
        nationalityIdValue={nationalityIdValue}
        phoneNumberChange={e => this.handlePhoneNumberChange(e)}
        phoneNumberValue={phoneNumberValue}
        submitInformationHandlerAction={submitInformationHandlerAction}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  submitInformationHandlerAction: formData => {
    dispatch(submitInformationHandlerAction(formData));
  }
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(SubmitInformationPage)
);
