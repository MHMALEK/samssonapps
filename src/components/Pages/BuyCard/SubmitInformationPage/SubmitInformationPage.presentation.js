import React from "react";
import {Link} from 'react-router-dom';
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
    phoneNumberChange,
    nameValue,
    familyValue,
    certificateIdValue,
    NationalityValue,
    nationalityIdValue,
    phoneNumberValue
  } = props;

  const submitInformationHandler = () => {
    const {
      submitInformationHandlerAction,
      nameValue,
      familyValue,
      certificateIdValue,
      NationalityValue,
      nationalityIdValue,
      phoneNumberValue,
      history
    } = props;
    const formData = {
      nameValue,
      familyValue,
      certificateIdValue,
      NationalityValue,
      nationalityIdValue,
      phoneNumberValue
    };
    submitInformationHandlerAction(formData);
    // history.push("/card/confirm-info");
  };

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
            <Input
              onChange={e => handleNameChange(e)}
              bgGray
              title="نام"
              value={nameValue}
            />
            <Input
              onChange={e => handleFamilyChange(e)}
              bgGray
              title="نام خانوادگی"
              value={familyValue}
            />
          </div>
          <div className="inputs-wrapper">
            <Input
              onChange={e => handleCertificateIdChange(e)}
              bgGray
              title="شماره شناسنامه"
              value={certificateIdValue}
            />
            <Input
              onChange={e => handleNationalityChange(e)}
              bgGray
              title="تابعیت"
              value={NationalityValue}
            />
          </div>
          <div className="inputs-wrapper">
            <Input
              onChange={e => handleNationalityIdChange(e)}
              bgGray
              title="کد ملی"
              value={nationalityIdValue}
            />
            <Input
              onChange={e => phoneNumberChange(e)}
              bgGray
              title="شماره تلفن همراه"
              value={phoneNumberValue}
            />
          </div>
        </Accordion>
        <div className="call-to-actions">
          <Button blueBg onClick={() => submitInformationHandler()}>
            مرحله بعد
          </Button>
          <Link to="/card/buy" >
            <Button blueBorder>مرحله قبل</Button>
          </Link>
          
        </div>
      </Container>
    </div>
  );
};

export default SubmitInformationPagePresentation;
