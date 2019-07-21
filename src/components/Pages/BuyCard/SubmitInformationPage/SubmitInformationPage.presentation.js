import React from "react";
import { Link } from "react-router-dom";
import Container from "../../../UI/Container";
import Accordion from "../../../UI/Accordion";
import Input from "../../../UI/Input";
import Button from "../../../UI/Button";
import NavBarWithSteps from "../../../Layout/\u0654NavBarWithSteps";
import RadioButton from "../../../UI/RadioButton";

class SubmitInformationPagePresentation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameValue: null,
      familyValue: null,
      certificateIdValue: null,
      nationalityValue: 1,
      nationalityIdValue: null,
      phoneNumberValue: null
    };
    this.getValidatedValue = this.getValidatedValue.bind(this);
    this.submitInformationHandler = this.submitInformationHandler.bind(this);
    this.handleNationalityChange = this.handleNationalityChange.bind(this);
  }

  foreiginOrNational() {
    const { nationalityValue } = this.state;
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
      phoneNumberValue,
      foreignersCodeValue
    } = this.state;

    let formData = {};
    if (nationalityValue == 1) {
      formData = {
        nameValue: nameValue || submitedInformationOnForm.name,
        familyValue: familyValue || submitedInformationOnForm.last_name,
        certificateIdValue:
          certificateIdValue || submitedInformationOnForm.id_certificate,
        nationalityValue:
          nationalityValue || submitedInformationOnForm.nationality_id,
        nationalityIdValue:
          nationalityIdValue || submitedInformationOnForm.national_code,
        phoneNumberValue:
          phoneNumberValue || submitedInformationOnForm.cell_phone
      };
    } else {
      formData = {
        nameValue: nameValue || submitedInformationOnForm.name,
        familyValue: familyValue || submitedInformationOnForm.last_name,
        certificateIdValue:
          certificateIdValue || submitedInformationOnForm.id_certificate,
        nationalityValue:
          nationalityValue || submitedInformationOnForm.nationality_id,
        foreignersCodeValue:
          foreignersCodeValue || submitedInformationOnForm.foreigners_code,
        phoneNumberValue:
          phoneNumberValue || submitedInformationOnForm.cell_phone
      };
    }

    console.log(formData);

    submitInformationHandlerAction(formData);
  };

  getValidatedValue(value, name) {
    this.setState({
      [name]: value
    });
  }

  handleNationalityChange(e) {
    this.setState({
      nationalityValue: e.target.value
    });
  }

  render() {
    const {
      handleNameChange,
      handleFamilyChange,
      handleCertificateIdChange,
      handleNationalityIdChange,
      phoneNumberChange,
      submitedInformationOnForm,
      handleForeignersCodeChange
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
              <RadioButton
                name="nationalityValue"
                value={1}
                defaultChecked={
                  this.state.nationalityValue == 1 ||
                  submitedInformationOnForm.nationality_id == 1
                }
                onChange={this.handleNationalityChange}
              >
                ایرانی
              </RadioButton>
              <RadioButton
                name="nationalityValue"
                value={2}
                defaultChecked={
                  this.state.nationalityValue == 2 ||
                  submitedInformationOnForm.nationality_id == 2
                }
                onChange={this.handleNationalityChange}
              >
                اتباع خارجی
              </RadioButton>
            </div>
            <div className="inputs-wrapper">
              {this.state.nationalityValue == 1 ||
              submitedInformationOnForm.nationality_id == 1 ? (
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
              ) : (
                <Input
                  onChange={handleForeignersCodeChange}
                  bgGray
                  type="tel"
                  title="کد اتباع خارجی"
                  value={
                    submitedInformationOnForm &&
                    submitedInformationOnForm.foreigners_code
                  }
                  validation="ForeignersCodeValidation"
                  name="foreignersCodeValue"
                  getValidatedValue={this.getValidatedValue}
                />
              )}
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
