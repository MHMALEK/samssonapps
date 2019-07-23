import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signInWithPhoneSSOAction } from "../../../../store/Modules/AuthSSO/Actions";
import AuthLayout from "../../../Layout/AuthLayout";
import Input from "../../../UI/Input";
import Button from "../../../UI/Button";
import Container from "../../../UI/Container";
import Logo from "../../../UI/Logo";

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
    const { signInAction, showVerify, history } = this.props;
    const { phoneNumber } = this.state;
    return !showVerify ? (
      <AuthLayout history={history}>
        <Container>
          <div className="sign-in-box">
            <div className="logo">
              <Logo />
              <p className="c-blue">ورود به سامانه دانشگاه آزاد اسلامی</p>
            </div>
            <div className="signIn-content">
              <p>برای دریافت کد ورود، شماره همراه خود را وارد کنید.</p>
              <div className="sign-in-input-wrapper">
                <Input
                  title="شماره تلفن همراه"
                  getInputValue={event => this.phoneNumberHandler(event)}
                  value={phoneNumber}
                />
              </div>
              <Button blueBg onClick={() => signInAction(phoneNumber)}>
                ورود
              </Button>
            </div>
          </div>
        </Container>
      </AuthLayout>
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
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInSSO);
