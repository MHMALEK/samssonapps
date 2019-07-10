import React from "react";
import Logo from "../../UI/Logo";
import Card from "../../UI/Card";
import Input from "../../UI/Input";
import Button from "../../UI/Button";
import Container from "../../UI/Container";
import RadioButton from "../../UI/RadioButton";

const LoginPagePresentation = props => {
  return (
    <>
      <div className="bg-pattern-light" />
      <Container>
        <div className="signup-page-wrapper">
          <Card>
            <Logo className="signup-logo-wrapper" />
            <p className="c-blue"> ثبت‌نام و انتخاب رشته دوره کارشناسی</p>
            <p className="c-blue">(صرفا بر اساس سوابق تحصیلی)</p>
            <Input />
            <Input />
            <Input />
            <RadioButton />
            <Button blueBg>ورود</Button>
            <Button blueBorder>دریافت دفترچه راهنمای ثبت‌نام</Button>
          </Card>
        </div>

        <Card>
          <div className="c-red">
            توجه داوطلبان گرامی را به نکات ذیل جلب می‌نماید:
          </div>
          <div className="c-blue">
            ۱. جهت ورود به سامانه ثبت‌نام و انتخاب رشته لازم است شناسه و رمز
            ورود از طریق همین پایگاه خریداری شود.
          </div>
          <p>بیشتر</p>
        </Card>
      </Container>
    </>
  );
};

export default LoginPagePresentation;
