import React from "react";
import AuthLayout from "../../../Layout/AuthLayout";
import Input from "../../../UI/Input";
import Button from "../../../UI/Button";
import Container from "../../../UI/Container";
import Logo from "../../../UI/Logo";

const SSOVerifyPresentation = props => {
  const expiredTime = false;
  return (
    <AuthLayout history={props.history}>
      <Container>
        <div className="sign-in-box">
          <div className="logo">
            <Logo />
            <p className="c-blue">ورود به سامانه دانشگاه آزاد اسلامی</p>
          </div>
          <div className="login-content">
            <p>
              پیامک حاوی کد ورود به شماره تلفن همراه ثبت شده شما ارسال شد. لطفا
              تا دریافت پیامک صبر کنید.
            </p>
            <div className="sign-in-input-wrapper">
              <Input title="کد ورود" />
            </div>
            <Button blueBg>ورود</Button>
            <div className="verify-footer">
              <p className="get-code-hint c-gray">
                تا دریافت پیامک کد فعالسازی صبر کنید
              </p>
              <p className={`${expiredTime ? "timer" : "c-red"}`}>
                {expiredTime ? (
                  "۱:۵۹"
                ) : (
                  <span onClick={() => console.log("sda")}> ارسال مجدد کد</span>
                )}
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

export default SSOVerifyPresentation;
