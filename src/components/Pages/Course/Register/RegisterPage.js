import React from "react";
import Container from "../../../UI/Container";
import Accordion from "../../../UI/Accordion";
import AccordionList from "../../../UI/AccordionList";
import NavBarWithSteps from "../../../Layout/\u0654NavBarWithSteps";
import Input from "../../../UI/Input";
import CalanderDatePicker from "../../../UI/CalanderDatePicker";
import ListWithModal from "../../BuyCard/BuyCardMainPage/Components/ListWithModal";

class RegisterWithCardPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.getSelectedValue = this.getSelectedValue.bind(this);
  }

  handleInputChange(e, stateName) {
    const value = e.target.value;
    this.setState({
      [stateName]: value
    });
  }

  getSelectedValue(e) {
    console.log(e);
  }

  render() {
    return (
      <div className="layout-wrapper">
        <NavBarWithSteps />
        <Container>
          <p className="c-blue">
            داوطلب گرامی: شما در ثبت‌نام و انتخاب رشته دوره کارشناسی پیوسته
            (صرفا بر اساس سوابق تحصیلی) نظام آموزشی تمام‌وقت مجموعه آزمایشی علوم
            ریاضی و فنی شرکت نموده‌اید.
          </p>

          <AccordionList>
            <Accordion title="اطلاعات فردی و شناسنامه‌ای">
              <div className="inputs-wrapper">
                <Input
                  getInputValue={e => this.handleInputChange(e, "name")}
                  validation="onlyPersianValidation"
                  bgGray
                  title="نام"
                  name="name"
                />
                <Input
                  getInputValue={e => this.handleInputChange(e, "last_name")}
                  bgGray
                  title="نام خانوادگی"
                  name="last_name"
                  validation="onlyPersianValidation"
                />
              </div>

              <div className="inputs-wrapper">
                <Input
                  getInputValue={e =>
                    this.handleInputChange(e, "id_certificate")
                  }
                  bgGray
                  type="text"
                  title="نام پدر"
                  name="id_certificate"
                  validation="certificateIdValidation"
                />
                <Input
                  getInputValue={e => this.handleInputChange(e, "cell_phone")}
                  bgGray
                  type="text"
                  validation="phoneNumberValidation"
                  name="birthday"
                  title="تاریخ تولد"
                />
              </div>
              <div className="inputs-wrapper">
                <Input
                  getInputValue={e =>
                    this.handleInputChange(e, "id_certificate")
                  }
                  bgGray
                  type="text"
                  title="شماره شناسنامه"
                  name="id_certificate"
                  validation="certificateIdValidation"
                />
                <Input
                  getInputValue={e => this.handleInputChange(e, "cell_phone")}
                  bgGray
                  type="tel"
                  validation="phoneNumberValidation"
                  name="birthday"
                  title="سری و سریال شناسنامه"
                />
                <ListWithModal
                  systemName="eductaionSystem"
                  name="نظام آموزشی"
                  data={[
                    {
                      id: 1,
                      name: "علوم ریاضی و فنی",
                      pivot: {
                        scheme_id: 1,
                        teaching_institution_id: 1
                      }
                    },
                    {
                      id: 2,
                      name: "علوم تجربی",
                      pivot: {
                        scheme_id: 1,
                        teaching_institution_id: 2
                      }
                    }
                  ]}
                  getSelectedValue={this.getSelectedValue}
                />
              </div>
              <div className="inputs-wrapper">
                <Input
                  getInputValue={e =>
                    this.handleInputChange(e, "id_certificate")
                  }
                  bgGray
                  type="text"
                  title="شماره ملی"
                  name="id_certificate"
                  validation="certificateIdValidation"
                />
                <ListWithModal
                  systemName="eductaionSystem"
                  name="جنسیت"
                  data={[
                    {
                      id: 1,
                      name: "علوم ریاضی و فنی",
                      pivot: {
                        scheme_id: 1,
                        teaching_institution_id: 1
                      }
                    },
                    {
                      id: 2,
                      name: "علوم تجربی",
                      pivot: {
                        scheme_id: 1,
                        teaching_institution_id: 2
                      }
                    }
                  ]}
                  getSelectedValue={this.getSelectedValue}
                />
              </div>
              <div className="inputs-wrapper">
                <ListWithModal
                  systemName="eductaionSystem"
                  name="دین"
                  data={[
                    {
                      id: 1,
                      name: "علوم ریاضی و فنی",
                      pivot: {
                        scheme_id: 1,
                        teaching_institution_id: 1
                      }
                    },
                    {
                      id: 2,
                      name: "علوم تجربی",
                      pivot: {
                        scheme_id: 1,
                        teaching_institution_id: 2
                      }
                    }
                  ]}
                  getSelectedValue={this.getSelectedValue}
                />
                <ListWithModal
                  systemName="eductaionSystem"
                  name="تابعیت"
                  data={[
                    {
                      id: 1,
                      name: "علوم ریاضی و فنی",
                      pivot: {
                        scheme_id: 1,
                        teaching_institution_id: 1
                      }
                    },
                    {
                      id: 2,
                      name: "علوم تجربی",
                      pivot: {
                        scheme_id: 1,
                        teaching_institution_id: 2
                      }
                    }
                  ]}
                  getSelectedValue={this.getSelectedValue}
                />
              </div>
              <div className="margin-top-bottom-20 inputs-wrapper-full-width">
                <Input
                  getInputValue={this.handleNationalityCodeChange}
                  bgGray
                  type="tel"
                  title="کد پیگیری ۱۲ رقمی"
                  name="national_code"
                />
              </div>
              <div className="inputs-wrapper">
                <ListWithModal
                  systemName="eductaionSystem"
                  name="وضعیت نظام وظیفه"
                  data={[
                    {
                      id: 1,
                      name: "علوم ریاضی و فنی",
                      pivot: {
                        scheme_id: 1,
                        teaching_institution_id: 1
                      }
                    },
                    {
                      id: 2,
                      name: "علوم تجربی",
                      pivot: {
                        scheme_id: 1,
                        teaching_institution_id: 2
                      }
                    }
                  ]}
                  getSelectedValue={this.getSelectedValue}
                />
                <ListWithModal
                  systemName="eductaionSystem"
                  name="وضعیت جسمانی"
                  data={[
                    {
                      id: 1,
                      name: "علوم ریاضی و فنی",
                      pivot: {
                        scheme_id: 1,
                        teaching_institution_id: 1
                      }
                    },
                    {
                      id: 2,
                      name: "علوم تجربی",
                      pivot: {
                        scheme_id: 1,
                        teaching_institution_id: 2
                      }
                    }
                  ]}
                  getSelectedValue={this.getSelectedValue}
                />
              </div>
              <div className="inputs-wrapper">
                <ListWithModal
                  systemName="eductaionSystem"
                  name="استفاده از سهمیه پذیرش"
                  data={[
                    {
                      id: 1,
                      name: "علوم ریاضی و فنی",
                      pivot: {
                        scheme_id: 1,
                        teaching_institution_id: 1
                      }
                    },
                    {
                      id: 2,
                      name: "علوم تجربی",
                      pivot: {
                        scheme_id: 1,
                        teaching_institution_id: 2
                      }
                    }
                  ]}
                  getSelectedValue={this.getSelectedValue}
                />

                <ListWithModal
                  systemName="eductaionSystem"
                  name="مدت حضور در جبهه"
                  data={[
                    {
                      id: 1,
                      name: "علوم ریاضی و فنی",
                      pivot: {
                        scheme_id: 1,
                        teaching_institution_id: 1
                      }
                    },
                    {
                      id: 2,
                      name: "علوم تجربی",
                      pivot: {
                        scheme_id: 1,
                        teaching_institution_id: 2
                      }
                    }
                  ]}
                  getSelectedValue={this.getSelectedValue}
                />
              </div>
              <div className="inputs-wrapper-full-width">
                <Input
                  getInputValue={this.handleNationalityCodeChange}
                  bgGray
                  type="tel"
                  title="کد پیگیری ۱۲ رقمی"
                  name="national_code"
                />
              </div>
            </Accordion>

            <Accordion title="اطلاعات تماس">
              <div className="inputs-wrapper">
                <Input
                  getInputValue={e => this.handleInputChange(e, "name")}
                  validation="onlyPersianValidation"
                  bgGray
                  title="شماره تلفن ثابت"
                  name="name"
                />
                <Input
                  getInputValue={e => this.handleInputChange(e, "last_name")}
                  bgGray
                  title="پیش شماره شهرستان"
                  name="last_name"
                  validation="onlyPersianValidation"
                />
              </div>

              <div className="inputs-wrapper">
                <Input
                  getInputValue={e =>
                    this.handleInputChange(e, "id_certificate")
                  }
                  bgGray
                  type="text"
                  title="شماره تلفن همراه"
                  name="id_certificate"
                  validation="certificateIdValidation"
                />
                <Input
                  getInputValue={e => this.handleInputChange(e, "cell_phone")}
                  bgGray
                  type="text"
                  validation="phoneNumberValidation"
                  name="birthday"
                  title="پست الکترونیکی"
                />
              </div>
              <div className="inputs-wrapper">
                <ListWithModal
                  systemName="eductaionSystem"
                  name="استان محل سکونت"
                  data={[
                    {
                      id: 1,
                      name: "علوم ریاضی و فنی",
                      pivot: {
                        scheme_id: 1,
                        teaching_institution_id: 1
                      }
                    },
                    {
                      id: 2,
                      name: "علوم تجربی",
                      pivot: {
                        scheme_id: 1,
                        teaching_institution_id: 2
                      }
                    }
                  ]}
                  getSelectedValue={this.getSelectedValue}
                />
                <ListWithModal
                  systemName="eductaionSystem"
                  name="استان محل تولد"
                  data={[
                    {
                      id: 1,
                      name: "علوم ریاضی و فنی",
                      pivot: {
                        scheme_id: 1,
                        teaching_institution_id: 1
                      }
                    },
                    {
                      id: 2,
                      name: "علوم تجربی",
                      pivot: {
                        scheme_id: 1,
                        teaching_institution_id: 2
                      }
                    }
                  ]}
                  getSelectedValue={this.getSelectedValue}
                />
              </div>
              <div className="inputs-wrapper-full-width margin-top-bottom-20">
                <Input
                  getInputValue={e =>
                    this.handleInputChange(e, "id_certificate")
                  }
                  bgGray
                  type="text"
                  title="کد پستی"
                  name="id_certificate"
                  validation="certificateIdValidation"
                />
              </div>
              <div className="inputs-wrapper-full-width margin-top-bottom-20">
                <Input
                  getInputValue={e => this.handleInputChange(e, "cell_phone")}
                  bgGray
                  type="text"
                  validation="phoneNumberValidation"
                  name="birthday"
                  title="آدرس محل سکونت"
                />
              </div>
            </Accordion>

            <Accordion title="دیپلم نظام جدید">
              <div className="inputs-wrapper">
                <ListWithModal
                  systemName="eductaionSystem"
                  name="استان محل تولد"
                  data={[
                    {
                      id: 1,
                      name: "علوم ریاضی و فنی",
                      pivot: {
                        scheme_id: 1,
                        teaching_institution_id: 1
                      }
                    },
                    {
                      id: 2,
                      name: "علوم تجربی",
                      pivot: {
                        scheme_id: 1,
                        teaching_institution_id: 2
                      }
                    }
                  ]}
                  getSelectedValue={this.getSelectedValue}
                />
                <Input
                  getInputValue={e => this.handleInputChange(e, "cell_phone")}
                  bgGray
                  type="text"
                  validation="phoneNumberValidation"
                  name="birthday"
                  title="عنوان دیپلم"
                />
              </div>
              <div className="inputs-wrapper">
                <ListWithModal
                  systemName="eductaionSystem"
                  name="استان اخذ دیپلم"
                  data={[
                    {
                      id: 1,
                      name: "علوم ریاضی و فنی",
                      pivot: {
                        scheme_id: 1,
                        teaching_institution_id: 1
                      }
                    },
                    {
                      id: 2,
                      name: "علوم تجربی",
                      pivot: {
                        scheme_id: 1,
                        teaching_institution_id: 2
                      }
                    }
                  ]}
                  getSelectedValue={this.getSelectedValue}
                />
                <ListWithModal
                  systemName="eductaionSystem"
                  name="وضعیت تحصیلی در آموزش عالی"
                  data={[
                    {
                      id: 1,
                      name: "علوم ریاضی و فنی",
                      pivot: {
                        scheme_id: 1,
                        teaching_institution_id: 1
                      }
                    },
                    {
                      id: 2,
                      name: "علوم تجربی",
                      pivot: {
                        scheme_id: 1,
                        teaching_institution_id: 2
                      }
                    }
                  ]}
                  getSelectedValue={this.getSelectedValue}
                />
              </div>
              <div className="inputs-wrapper">
                <Input
                  getInputValue={e => this.handleInputChange(e, "cell_phone")}
                  bgGray
                  type="text"
                  validation="phoneNumberValidation"
                  name="birthday"
                  title="کد دانش آموزی"
                />
                <Input
                  getInputValue={e => this.handleInputChange(e, "cell_phone")}
                  bgGray
                  type="text"
                  validation="phoneNumberValidation"
                  name="birthday"
                  title="تاریخ اخذ مدرک دیپلم"
                />
              </div>
              <div className="inputs-wrapper">
                <Input
                  getInputValue={e => this.handleInputChange(e, "cell_phone")}
                  bgGray
                  type="text"
                  validation="phoneNumberValidation"
                  name="birthday"
                  title="معدل کل دوره پیش دانشگاهی"
                />
                <Input
                  getInputValue={e => this.handleInputChange(e, "cell_phone")}
                  bgGray
                  type="text"
                  validation="phoneNumberValidation"
                  name="birthday"
                  title="معدل کتبی دیپلم"
                />
              </div>
              <div className="inputs-wrapper">
                <Input
                  getInputValue={e => this.handleInputChange(e, "cell_phone")}
                  bgGray
                  type="text"
                  validation="phoneNumberValidation"
                  name="birthday"
                  title="معدل کل دیپلم"
                />
                <Input
                  getInputValue={e => this.handleInputChange(e, "cell_phone")}
                  bgGray
                  type="text"
                  validation="phoneNumberValidation"
                  name="birthday"
                  title="معدل کل دوره کاردانی "
                />
              </div>
              <div className="inputs-wrapper">
                <ListWithModal
                  systemName="eductaionSystem"
                  name="استان محل اخذ دیپلم"
                  data={[
                    {
                      id: 1,
                      name: "علوم ریاضی و فنی",
                      pivot: {
                        scheme_id: 1,
                        teaching_institution_id: 1
                      }
                    },
                    {
                      id: 2,
                      name: "علوم تجربی",
                      pivot: {
                        scheme_id: 1,
                        teaching_institution_id: 2
                      }
                    }
                  ]}
                  getSelectedValue={this.getSelectedValue}
                />
                <Input
                  getInputValue={e => this.handleInputChange(e, "cell_phone")}
                  bgGray
                  type="text"
                  validation="phoneNumberValidation"
                  name="birthday"
                  title="تاریخ اخذ مدرک دیپلم "
                />
              </div>
            </Accordion>
          </AccordionList>
        </Container>
      </div>
    );
  }
}

export default RegisterWithCardPage;
