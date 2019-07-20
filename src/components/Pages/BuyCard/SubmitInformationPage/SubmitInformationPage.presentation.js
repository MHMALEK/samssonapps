import React from "react";
import { Link } from "react-router-dom";
import Container from "../../../UI/Container";
import Accordion from "../../../UI/Accordion";
import Input from "../../../UI/Input";
import Button from "../../../UI/Button";
import MultiStepNavBar from "../../../UI/MultiStepNavBar";

class SubmitInformationPagePresentation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameValue: null,
      familyValue: null,
      certificateIdValue: null,
      nationalityValue: null,
      nationalityIdValue: null,
      phoneNumberValue: null
    };
    this.getValidatedValue = this.getValidatedValue.bind(this);
    this.submitInformationHandler = this.submitInformationHandler.bind(this);
  }

  submitInformationHandler = () => {
    const {
      submitInformationHandlerAction,

      history
    } = this.props;
    const {
      nameValue,
      familyValue,
      certificateIdValue,
      nationalityValue,
      nationalityIdValue,
      phoneNumberValue
    } = this.state;

    const formData = {
      nameValue,
      familyValue,
      certificateIdValue,
      nationalityValue,
      nationalityIdValue,
      phoneNumberValue
    };
    submitInformationHandlerAction(formData);
    history.push("/card/confirm");
  };

  getValidatedValue(value, name) {
    this.setState({
      [name]: value
    });
  }

  render() {
    const {
      navBarSteps,
      handleNameChange,
      handleFamilyChange,
      handleCertificateIdChange,
      handleNationalityChange,
      handleNationalityIdChange,
      phoneNumberChange
    } = this.props;
    return (
      <div className="layout-wrapper">
        <MultiStepNavBar steps={navBarSteps} />
        <Container>
          <Accordion title="کارت اعتباری">
            <p className="c-red">
              ثبت‌نام و انتخاب رشته دوره دکتری تخصصی بدون آزمون (ویژه
              استعداد‌های درخشان) سال ۱۳۹۸
            </p>
            <p className="c-blue">
              داوطلب گرامی، با خرید این کارت شما مجاز خواهید بود تنها در مجموعه
              آموزشی سم‌شناسی در دوره بدون آزمون (ویژه استعدادهای درخشان)
              ثبت‌نام نمایید.
            </p>
          </Accordion>

          <Accordion title="اطلاعات فردی و شناسنامه‌ای">
            <div className="inputs-wrapper">
              <Input
                onChange={handleNameChange}
                validation="onlyPersianValidation"
                bgGray
                title="نام"
                name="nameValue"
                getValidatedValue={this.getValidatedValue}
              />
              <Input
                onChange={handleFamilyChange}
                bgGray
                title="نام خانوادگی"
                name="familyValue"
                validation="onlyPersianValidation"
                getValidatedValue={this.getValidatedValue}
              />
            </div>
            <div className="inputs-wrapper">
              <Input
                onChange={handleCertificateIdChange}
                bgGray
                type="tel"
                title="شماره شناسنامه"
                name="certificateIdValue"
                validation="certificateIdValidation"
                getValidatedValue={this.getValidatedValue}
              />
              <Input
                onChange={handleNationalityChange}
                name="nationalityValue"
                bgGray
                title="تابعیت"
                getValidatedValue={this.getValidatedValue}
              />
            </div>
            <div className="inputs-wrapper">
              <Input
                onChange={handleNationalityIdChange}
                bgGray
                type="tel"
                title="کد ملی"
                validation="nationalityIdValidation"
                name="nationalityIdValue"
                getValidatedValue={this.getValidatedValue}
              />
              <Input
                onChange={phoneNumberChange}
                bgGray
                type="tel"
                validation="phoneNumberValidation"
                name="phoneNumberValue"
                title="شماره تلفن همراه"
                getValidatedValue={this.getValidatedValue}
              />
            </div>
          </Accordion>
          <div className="call-to-actions">
            <div className="call-to-action-button-wrapper">
              <Button blueBg onClick={() => this.submitInformationHandler()}>
                مرحله بعد
              </Button>
            </div>

            <div className="call-to-action-button-wrapper">
              <Link to="/card/buy">
                <Button blueBorder>مرحله قبل</Button>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default SubmitInformationPagePresentation;
