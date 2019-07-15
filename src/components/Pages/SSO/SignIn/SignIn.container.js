import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signInWithPhoneSSOAction } from "../../../../store/Modules/AuthSSO/Actions";
import { changePhoneNumberHandlerAction } from "../../../../store/Modules/UI/Actions";
import SignInSSOPresentation from "./SignIn.presentation";

class SignInSSO extends React.Component {
  constructor(props) {
    super(props);
    this.phoneNumberHandler = this.phoneNumberHandler.bind(this);
    this.state = {
      phoneNumber: ""
    };
  }
  phoneNumberHandler(event) {
    const value = event.target.value;
    this.setState({
      phoneNumber: value
    });
  }

  render() {
    const { signInAction, showVerify } = this.props;
    return !showVerify ? (
      <SignInSSOPresentation
        phoneNumberHandler={this.phoneNumberHandler}
        phoneNumberValue={this.state.phoneNumber}
        signInAction={signInAction(this.state.phoneNumber)}
      />
    ) : (
      <Redirect to="/sso/verify" />
    );
  }
}
const mapStateToProps = state => {
  return {
    loadingSubmitPhoneNumber: state.AuthSSO.loadingSubmitPhoneNumber,
    showVerify: state.AuthSSO.showVerify,
    initTimer: state.AuthSSO.initTimer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signInAction: phoneNumber => {
      dispatch(signInWithPhoneSSOAction(phoneNumber));
    },
    phoneNumberHandlerAction: phoneNumber => {
      dispatch(changePhoneNumberHandlerAction(phoneNumber));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInSSO);
