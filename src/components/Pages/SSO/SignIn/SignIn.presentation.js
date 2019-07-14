import React from "react";
import AuthLayout from "../../../Layout/AuthLayout";
import Input from "../../../UI/Input";
import Button from "../../../UI/Button";
import Container from "../../../UI/Container";
import Logo from "../../../UI/Logo";

const SignInSSOPresentation = props => {
  return (
    <AuthLayout history={props.history}>
      <Container>
        <div className="sign-in-box">
          <div className="logo">
            <Logo />
            <p className="c-blue">ورود به سامانه دانشگاه آزاد اسلامی</p>
          </div>
          <div className="login-content">
            <p>برای دریافت کد ورود، شماره همراه خود را وارد کنید.</p>
            <div className="sign-in-input-wrapper">
              <Input title="شماره تلفن همراه" />
            </div>
            <Button blueBg>ورود</Button>
          </div>
        </div>
      </Container>
    </AuthLayout>
  );
};

export default SignInSSOPresentation;
