import React from "react";
import { Link } from "react-router-dom";
import Container from "../../../UI/Container";
import Accordion from "../../../UI/Accordion";
import Input from "../../../UI/Input";
import Button from "../../../UI/Button";
import NavBarWithSteps from "../../../Layout/\u0654NavBarWithSteps";

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
      submitedInformationOnForm
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
      nameValue: nameValue || submitedInformationOnForm.name,
      familyValue: familyValue || submitedInformationOnForm.last_name,
      certificateIdValue:
        certificateIdValue || submitedInformationOnForm.id_certificate,
      nationalityValue:
        nationalityValue || submitedInformationOnForm.nationality_id,
      nationalityIdValue:
        nationalityIdValue || submitedInformationOnForm.national_code,
      phoneNumberValue: phoneNumberValue || submitedInformationOnForm.cell_phone
    };
    submitInformationHandlerAction(formData);
  };

  getValidatedValue(value, name) {
    this.setState({
      [name]: value
    });
  }

  render() {
    const {
      handleNameChange,
      handleFamilyChange,
      handleCertificateIdChange,
      handleNationalityChange,
      handleNationalityIdChange,
      phoneNumberChange,
      submitedInformationOnForm
    } = this.props;
    return (
      <div className="layout-wrapper">
        <NavBarWithSteps />
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
                value={
                  submitedInformationOnForm && submitedInformationOnForm.name
                }
              />
              <Input
                onChange={handleFamilyChange}
                bgGray
                title="نام خانوادگی"
                name="familyValue"
                validation="onlyPersianValidation"
                getValidatedValue={this.getValidatedValue}
                value={
                  submitedInformationOnForm &&
                  submitedInformationOnForm.last_name
                }
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
                value={
                  submitedInformationOnForm &&
                  submitedInformationOnForm.id_certificate
                }
                getValidatedValue={this.getValidatedValue}
              />
              <Input
                onChange={handleNationalityChange}
                name="nationalityValue"
                bgGray
                value={
                  submitedInformationOnForm &&
                  submitedInformationOnForm.nationality_id
                }
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
                value={
                  submitedInformationOnForm &&
                  submitedInformationOnForm.national_code
                }
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
                value={
                  submitedInformationOnForm &&
                  submitedInformationOnForm.cell_phone
                }
                getValidatedValue={this.getValidatedValue}
              />
            </div>
          </Accordion>
          <div className="call-to-actions">
            <div className="call-to-action-button">
              <Button blueBg onClick={() => this.submitInformationHandler()}>
                مرحله بعد
              </Button>
            </div>
            <div className="call-to-action-button">
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
