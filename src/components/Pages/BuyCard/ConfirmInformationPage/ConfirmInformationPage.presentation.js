import React from "react";
import Container from "../../../UI/Container";
import Accordion from "../../../UI/Accordion";
import Button from "../../../UI/Button";
import InputPlaceholder from "../../../UI/InputPlaceholder";
import NavBarWithSteps from "../../../Layout/\u0654NavBarWithSteps";

const ConfirmInformationPagePresentation = props => {
  const { navBarSteps, data } = props;

  const confirmInformationHandler = () => {
    const { confirmInformationHandlerAction } = props;
    confirmInformationHandlerAction();
  };

  const returnToLastPage = () => {
    const { history, backFromConfirmInformation } = props;
    backFromConfirmInformation();
    history.goBack();
  };

  return (
    <div className="layout-wrapper">
      <NavBarWithSteps />
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
            <InputPlaceholder title="نام">
              {data ? data.name : null}
            </InputPlaceholder>
            <InputPlaceholder title=" نام خانوادگی">
              {data ? data.lastName : null}
            </InputPlaceholder>
          </div>
          <div className="inputs-wrapper">
            <InputPlaceholder title="شماره شناسنامه">
              {data ? data.certificateId : null}
            </InputPlaceholder>
            <InputPlaceholder title="تابعیت">
              {data ? data.nationalityId : null}
            </InputPlaceholder>
          </div>
          <div className="inputs-wrapper">
            <InputPlaceholder title="کد ملی">
              {data ? data.nationalCode : null}
            </InputPlaceholder>
            <InputPlaceholder title="شماره تلفن همراه" r>
              {data ? data.phoneNumber : null}
            </InputPlaceholder>
          </div>
        </Accordion>
        <div className="call-to-actions">
          <div className="call-to-action-button">
            <Button blueBg onClick={() => confirmInformationHandler()}>
              پرداخت
            </Button>
          </div>
          <div className="call-to-action-button">
            <Button blueBorder onClick={() => returnToLastPage()}>
              مرحله قبل
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ConfirmInformationPagePresentation;
