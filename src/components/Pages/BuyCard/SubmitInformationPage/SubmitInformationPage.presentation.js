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
      name: null,
      last_name: null,
      id_certificate: null,
      nationality_id: null,
      national_code: null,
      cell_phone: null,
      foreigners_code: null,
      allDataIsValid: false
    };
    // this.getValidatedValue = this.getValidatedValue.bind(this);
    this.submitInformationHandler = this.submitInformationHandler.bind(this);
    this.handleNationalityIdChange = this.handleNationalityIdChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(value, name) {
    console.log(value, name);
    this.setState({
      [name]: value
    });
  }

  handleNationalityIdChange(e) {
    this.setState({
      nationality_id: e.target.value
    });
  }

  componentWillReceiveProps(props) {
    const { submitedInformationOnForm } = props;
    // when user submited information before and hit back button on
    // last page We will show him the last data he/she has been entered
    if (props.submitedInformationOnForm) {
      this.setState({
        name: submitedInformationOnForm.name,
        last_name: submitedInformationOnForm.last_name,
        id_certificate: submitedInformationOnForm.id_certificate,
        cell_phone: submitedInformationOnForm.cell_phone,
        nationality_id: null,
        national_code: submitedInformationOnForm.national_code
          ? submitedInformationOnForm.national_code
          : null,
        foreigners_code: submitedInformationOnForm.foreigners_code
          ? submitedInformationOnForm.foreigners_code
          : null
      });
    }
  }

  submitInformationHandler = () => {
    const { submitInformationHandlerAction } = this.props;

    const {
      name,
      last_name,
      id_certificate,
      nationality_id,
      national_code,
      cell_phone,
      foreigners_code
    } = this.state;

    let formData = {
      name,
      last_name,
      id_certificate,
      nationality_id,
      national_code,
      cell_phone,
      foreigners_code
    };

    if (nationality_id == 1) {
      formData.national_code = national_code;
      formData.foreigners_code = undefined;
    } else {
      formData.foreigners_code = foreigners_code;
      formData.national_code = undefined;
    }
    console.log(formData, national_code);
    submitInformationHandlerAction(formData);
  };

  render() {
    const { submitedInformationOnForm, allDataIsValid, history } = this.props;

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
                onChange={this.handleInputChange}
                validation="onlyPersianValidation"
                bgGray
                title="نام"
                name="name"
                value={
                  submitedInformationOnForm && submitedInformationOnForm.name
                }
              />
              <Input
                onChange={this.handleInputChange}
                bgGray
                title="نام خانوادگی"
                name="last_name"
                validation="onlyPersianValidation"
                value={
                  submitedInformationOnForm &&
                  submitedInformationOnForm.last_name
                }
              />
            </div>
            <div className="inputs-wrapper">
              <Input
                onChange={this.handleInputChange}
                bgGray
                type="tel"
                title="شماره شناسنامه"
                name="id_certificate"
                validation="certificateIdValidation"
                value={
                  submitedInformationOnForm &&
                  submitedInformationOnForm.id_certificate
                }
              />
              <Input
                onChange={this.handleInputChange}
                bgGray
                type="tel"
                validation="phoneNumberValidation"
                name="cell_phone"
                title="شماره تلفن همراه"
                value={
                  submitedInformationOnForm &&
                  submitedInformationOnForm.cell_phone
                }
              />
            </div>
            <div className="inputs-wrapper-full-width">
              <div className="radio-buttons-wrapper">
                <RadioButton
                  name="nationality_id"
                  value={1}
                  onChange={this.handleNationalityIdChange}
                >
                  ایرانی
                </RadioButton>
                <RadioButton
                  name="nationality_id"
                  value={2}
                  onChange={this.handleNationalityIdChange}
                >
                  اتباع خارجی
                </RadioButton>
              </div>
              {this.state.nationality_id == 1 ||
              this.state.nationality_id == null ? (
                <Input
                  onChange={this.handleInputChange}
                  bgGray
                  type="tel"
                  title="کد ملی"
                  name="national_code"
                />
              ) : (
                <Input
                  onChange={this.handleInputChange}
                  bgGray
                  type="tel"
                  title="کد اتباع خارجی"
                  name="foreigners_code"
                />
              )}
            </div>
          </Accordion>
          <div className="call-to-actions">
            <div className="call-to-action-button">
              <Button blueBg onClick={() => this.submitInformationHandler()}>
                مرحله بعد
              </Button>
            </div>
            <div className="call-to-action-button">
              <div onClick={() => history.goBack()}>
                <Button blueBorder>مرحله قبل</Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default SubmitInformationPagePresentation;
