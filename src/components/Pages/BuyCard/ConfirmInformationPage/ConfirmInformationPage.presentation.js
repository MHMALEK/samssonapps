import React from "react";
import Container from "../../../UI/Container";
import Accordion from "../../../UI/Accordion";
import Input from "../../../UI/Input";
import Button from "../../../UI/Button";
import MultiStepNavBar from "../../../UI/MultiStepNavBar";

const ConfirmInformationPagePresentation = props => {
  const {
    navBarSteps,
      data
  } = props;

  const confirmInformationHandler = () => {
    const { confirmInformationHandlerAction } = props;
    confirmInformationHandlerAction();
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
            <Input bgGray title="نام" value={data ? data.name : null} disabled />
            <Input bgGray title="نام خانوادگی" value={data ?  data.lastName : null} disabled />
          </div>
          <div className="inputs-wrapper">
            <Input
              bgGray
              title="شماره شناسنامه"
              value={data ? data.certificateId : null}
              disabled
            />
            <Input bgGray title="تابعیت" value={data ? data.nationalityId : null} disabled />
          </div>
          <div className="inputs-wrapper">
            <Input bgGray title="کد ملی" value={data ? data.nationalCode : null} disabled />
            <Input
              bgGray
              title="شماره تلفن همراه"
              value={data ? data.phoneNumber : null}
              disabled
            />
          </div>
        </Accordion>
        <div className="call-to-actions">
          <Button blueBg onClick={() => confirmInformationHandler()}>
            پرداخت
          </Button>
          <Button blueBorder>مرحله قبل</Button>
        </div>
      </Container>
    </div>
  );
};

export default ConfirmInformationPagePresentation;
