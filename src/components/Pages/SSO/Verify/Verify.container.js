import React from "react";
import { connect } from "react-redux";
import AuthLayout from "../../../Layout/AuthLayout";
import Input from "../../../UI/Input";
import Button from "../../../UI/Button";
import Container from "../../../UI/Container";
import Logo from "../../../UI/Logo";
import Timer from "../../../UI/Timer";
import { verifyWithPhoneSSOAction } from "../../../../store/Modules/AuthSSO/Actions";

class VerifySSO extends React.PureComponent {
  constructor(props) {
    super(props);
    this.verifyCodeHandler = this.verifyCodeHandler.bind(this);
    this.renderOnComplete = this.renderOnComplete.bind(this);
    this.sendVerifyCodeAgain = this.sendVerifyCodeAgain.bind(this);
    this.state = {
      verifyCode: ""
    };
  }
  shouldComponentUpdate(props, states) {
    return true;
  }
  verifyCodeHandler(event) {
    const value = event.target.value;
    this.setState({
      verifyCode: value
    });
  }
  renderOnComplete() {
    return (
      <span className="c-red" onClick={() => this.sendVerifyCodeAgain()}>
        ارسال مجدد کد
      </span>
    );
  }
  sendVerifyCodeAgain() {}
  render() {
    const { showTimer, verifyAction } = this.props;
    const { verifyCode } = this.state;
    return (
      <AuthLayout history={this.props.history}>
        <Container>
          <div className="sign-in-box">
            <div className="logo">
              <Logo />
              <p className="c-blue">ورود به سامانه دانشگاه آزاد اسلامی</p>
            </div>
            <div className="signIn-content">
              <p>
                پیامک حاوی کد ورود به شماره تلفن همراه ثبت شده شما ارسال شد.
                لطفا تا دریافت پیامک صبر کنید.
              </p>
              <div className="sign-in-input-wrapper">
                <Input
                  title="کد ورود"
                  onChange={event => this.verifyCodeHandler(event)}
                  value={verifyCode}
                />
              </div>
              <Button blueBg onClick={() => verifyAction(verifyCode)}>
                ورود
              </Button>
              <div className="verify-footer">
                <p className="get-code-hint c-gray">
                  تا دریافت پیامک کد فعالسازی صبر کنید
                </p>
                <p className="timer">
                  <Timer
                    duration={2 * 60 * 1000}
                    onComplete={this.renderOnComplete()}
                  />
                </p>
              </div>

              <div className="change-phone-number c-blue">
                تغییر شماره تلفن همراه
              </div>
            </div>
          </div>
        </Container>
      </AuthLayout>
    );
  }
}

const mapStateToProps = state => {
  return {
    showTimer: state.AuthSSO.initTimer,
    phoneNumber: state.AuthSSO.phoneNumber
  };
};

const MapDispatchToProps = dispatch => {
  return {
    verifyAction: verifyCode => {
      dispatch(verifyWithPhoneSSOAction(verifyCode));
    }
  };
};

export default connect(
  mapStateToProps,
  MapDispatchToProps
)(VerifySSO);
