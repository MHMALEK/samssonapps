import React from "react";
import Container from "../../../UI/Container";
import Accordion from "../../../UI/Accordion";
import Input from "../../../UI/Input";
import Button from "../../../UI/Button";
import MultiStepNavBar from "../../../UI/MultiStepNavBar";

const SubmitInformationPagePresentation = props => {
  const {
    navBarSteps,
    handleNameChange,
    handleFamilyChange,
    handleCertificateIdChange,
    handleNationalityChange,
    handleNationalityIdChange,
    phoneNumberChange
  } = props;

  return (
    <div className="layout-wrapper">
      <MultiStepNavBar steps={navBarSteps} />
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
            <Input onChange={e => handleNameChange(e)} bgGray title="نام" />
            <Input
              onChange={e => handleFamilyChange(e)}
              bgGray
              title="نام خانوادگی"
            />
          </div>
          <div className="inputs-wrapper">
            <Input
              onChange={e => handleCertificateIdChange(e)}
              bgGray
              title="شماره شناسنامه"
            />
            <Input
              onChange={e => handleNationalityChange(e)}
              bgGray
              title="تابعیت"
            />
          </div>
          <div className="inputs-wrapper">
            <Input
              onChange={e => handleNationalityIdChange(e)}
              bgGray
              title="کد ملی"
            />
            <Input
              onChange={e => phoneNumberChange(e)}
              bgGray
              title="شماره تلفن همراه"
            />
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
