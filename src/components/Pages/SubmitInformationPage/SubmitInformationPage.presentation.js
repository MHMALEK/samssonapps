import React from "react";
import NavBar from "../../Layout/NavBar";
import Container from "../../UI/Container";
import Accordion from "../../UI/Accordion";
import Input from "../../UI/Input";
import Button from "../../UI/Button";

const SubmitInformationPagePresentation = props => {
  return (
    <div>
      <NavBar />
      <Container>
        <Accordion title="کارت اعتباری">
          <p className="c-red">
            ثبت‌نام و انتخاب رشته دوره دکتری تخصصی بدون آزمون (ویژه استعداد‌های
            درخشان) سال ۱۳۹۸
          </p>
          <p className="c-blue">
            داوطلب گرامی، با خرید این کارت شما مجاز خواهید بود تنها در مجموعه
            آموزشی سم‌شناسی در دوره بدون آزمون (ویژه استعدادهای درخشان) ثبت‌نام
            نمایید.
          </p>
        </Accordion>

        <Accordion title="اطلاعات فردی و شناسنامه‌ای">
          <div className="inputs-wrapper">
            <Input bgGray title="نام" />
            <Input bgGray title="نام خانوادگی" />
          </div>
          <div className="inputs-wrapper">
            <Input bgGray title="شماره شناسنامه" />
            <Input bgGray title="تابعیت" />
          </div>
          <div className="inputs-wrapper">
            <Input bgGray title="کد ملی" />
            <Input bgGray title="شماره تلفن همراه" />
          </div>
        </Accordion>
        <div className="call-to-actions">
          <Button blueBg>مرحله بعد</Button>
          <Button blueBorder>مرحله قبل</Button>
        </div>
      </Container>
    </div>
  );
};

export default SubmitInformationPagePresentation;
