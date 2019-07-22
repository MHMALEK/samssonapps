import React from "react";
import AuthLayout from "../../../Layout/AuthLayout";
import Container from "../../../UI/Container";
import Button from "../../../UI/Button";
import Input from "../../../UI/Input";
import Logo from "../../../UI/Logo";
import RadioButton from "../../../UI/RadioButton";
import Card from "../../../UI/Card";

const LoginWithCardPage = props => {
  return (
    <AuthLayout>
      <Container>
        <div className="sign-in-box">
          <div className="logo">
            <Logo />
            <p className="c-blue">ثبت‌نام و انتخاب رشته دوره کارشناسی</p>
            <p className="c-blue">(صرفا بر اساس سوابق تحصیلی)</p>
          </div>
          <div className="signIn-content">
            <p>برای دریافت کد ورود، شماره همراه خود را وارد کنید.</p>
            <div className="sign-in-input-wrapper">
              <Input title="نام کاربری" />
            </div>
            <div className="sign-in-input-wrapper">
              <Input title="کلمه عبور" />
            </div>
            <div className="sign-in-input-wrapper inputs-wrapper-full-width">
              <div className="radio-buttons-wrapper">
                <RadioButton name="nationality_id" value={1}>
                  ایرانی
                </RadioButton>
                <RadioButton name="nationality_id" value={2}>
                  اتباع خارجی
                </RadioButton>
              </div>
              {1 == 1 ? (
                <Input bgGray type="tel" title="کد ملی" name="national_code" />
              ) : (
                <Input
                  onChange={this.handleForeignersCodeChange}
                  bgGray
                  type="tel"
                  title="کد اتباع خارجی"
                  name="foreigners_code"
                />
              )}
            </div>
            <div className="login-page-button">
              <Button blueBg>ورود</Button>
            </div>
            <div className="login-page-button">
              <Button blueBorder>دریافت دفترچه راهنمای ثبت‌نام</Button>
            </div>
          </div>
        </div>
        <div>
          <Card
            withOutShadow
            footer={
              <Container>
                <p className="c-blue text-left">بیشتر</p>
              </Container>
            }
          >
            <p className="c-red">
              توجه داوطلبان گرامی را به نکات ذیل جلب می‌نماید:
            </p>
            <p>
              ۱. جهت ورود به سامانه ثبت‌نام و انتخاب رشته لازم است شناسه و رمز
              ورود از طریق همین پایگاه خریداری شود.
            </p>
          </Card>
        </div>
      </Container>
    </AuthLayout>
  );
};

export default LoginWithCardPage;
