import React from "react";
import AuthLayout from "../../../Layout/AuthLayout";
import Input from "../../../UI/Input";
import Button from "../../../UI/Button";
import Container from "../../../UI/Container";
import Logo from "../../../UI/Logo";
import Timer from "../../../UI/Timer";

const VerifySSOPresentation = props => {
  const sendVerifyCodeAgain = () => {};
  const renderOnComplete = () => {
    return (
      <span className="c-red" onClick={() => sendVerifyCodeAgain()}>
        ارسال مجدد کد
      </span>
    );
  };
  const { verifyCodeHandler, verifyCodeValue, verifyAction } = props;
  return (
    <AuthLayout history={props.history}>
      <Container>
        <div className="sign-in-box">
          <div className="logo">
            <Logo />
            <p className="c-blue">ورود به سامانه دانشگاه آزاد اسلامی</p>
          </div>
          <div className="signIn-content">
            <p>
              پیامک حاوی کد ورود به شماره تلفن همراه ثبت شده شما ارسال شد. لطفا
              تا دریافت پیامک صبر کنید.
            </p>
            <div className="sign-in-input-wrapper">
              <Input
                title="کد ورود"
                onChange={event => verifyCodeHandler(event)}
                value={verifyCodeValue}
              />
            </div>
            <Button
              blueBg
              onClick={() =>
                verifyAction({
                  phoneNumber: props.phoneNumber,
                  verifyCode: verifyCodeValue
                })
              }
            >
              ورود
            </Button>
            <div className="verify-footer">
              <p className="get-code-hint c-gray">
                تا دریافت پیامک کد فعالسازی صبر کنید
              </p>
              <p className="timer">
                <Timer
                  duration={2 * 60 * 1000}
                  onComplete={renderOnComplete()}
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
};

export default VerifySSOPresentation;
