import React from "react";

import Container from "../../UI/Container";
import Card from "../../UI/Card";
import Button from "../../UI/Button";
import Title from "../../UI/Title";
import Price from "../../UI/Price";
import MainLayout from "../../Layout/MainLayout";
import ModalComponent from "../../UI/Modal";
import SelectWithOutOption from "../../UI/SelectWithOutOption";
import RadioButton from "../../UI/RadioButton";
class BuyCardMainPagePresentation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal(modalId, type) {
    const modalUniqState = modalId + "modalIsOpen" + type;
    this.setState({
      [modalUniqState]: true
    });
  }
  render() {
    const { cardsList, history } = this.props;
    return (
      <MainLayout history={history} title="خرید کارت اعتباری ثبت‌نام">
        <div className="buy-card-main-page">
          <Container>
            <div className="first-form-wrapper">
              <Card title="توجه">
                <p className="c-red">
                  داوطلبان لازم است قبل از خرید کارت اعتباری گروه آزمایشی رشته
                  یا رشته‌های مورد نظر خود را شناسایی نمایند.
                </p>
                <div className="button-wrapper">
                  <Button blueBorder>
                    فهرست رشته‌های مقطع کارشناسی پیوسته
                  </Button>
                </div>
                <div className="button-wrapper">
                  <Button blueBorder>
                    فهرست رشته‌های مقطع کاردانی ناپیوسته
                  </Button>
                </div>
              </Card>

              <div className="buy-new-card">
                <Title blue>خرید کارت اعتباری ثبت‌نام</Title>
              </div>

              {cardsList &&
                cardsList.map(card => {
                  return (
                    <Card key={card.id} title={card.title}>
                      <div className="text-center">
                        <p> ثبت نام و انتخاب رشته دوره {card.title} </p>
                        <p>({card.description})</p>
                        <div className="price-wrapper">
                          <Price>{card.price}</Price>
                        </div>
                        <div className="select-wrapper">
                          {card.educationSystem &&
                            card.educationSystem.length > 0 && (
                              <div
                                onClick={() =>
                                  this.openModal(card.id, "EducationSystem")
                                }
                              >
                                <p className="select-without-option-lable">
                                  نظام آموزشی
                                </p>
                                <SelectWithOutOption />
                                {this.state[
                                  card.id + "modalIsOpenEducationSystem"
                                ] && (
                                  <ModalComponent title="نظام آموزشی">
                                    {card.educationSystem.map(
                                      (educationSystem, index) => {
                                        return (
                                          <RadioButton
                                            key={index}
                                            name="eductaionSystem"
                                            value={educationSystem.id}
                                            defaultChecked={
                                              educationSystem.id === 1
                                            }
                                          >
                                            {educationSystem.name}
                                          </RadioButton>
                                        );
                                      }
                                    )}
                                  </ModalComponent>
                                )}
                              </div>
                            )}
                        </div>
                        <div className="select-wrapper">
                          {card.teachingInstitution &&
                            card.teachingInstitution.length > 0 && (
                              <div
                                onClick={() =>
                                  this.openModal(card.id, "TeachingInstitution")
                                }
                              >
                                <p className="select-without-option-lable">
                                  مجموعه آزمایشی
                                </p>
                                <SelectWithOutOption />
                                {this.state[
                                  card.id + "modalIsOpenTeachingInstitution"
                                ] && (
                                  <ModalComponent title="مجموعه آزمایشی">
                                    {card.teachingInstitution.map(
                                      (teachingInstitution, index) => {
                                        return (
                                          <RadioButton
                                            key={index}
                                            name="teachingInstitution"
                                            value={teachingInstitution.id}
                                            defaultChecked={
                                              teachingInstitution.id === 2
                                            }
                                          >
                                            {teachingInstitution.name}
                                          </RadioButton>
                                        );
                                      }
                                    )}
                                  </ModalComponent>
                                )}
                              </div>
                            )}
                        </div>
                        <div className="button-wrapper">
                          <Button blueBg> خرید کارت</Button>
                        </div>
                      </div>
                    </Card>
                  );
                })}
            </div>
            <div className="card-review">
              <Button blueBorder>بازیابی اطلاعات کارت خریداری شده </Button>
            </div>
          </Container>
        </div>
      </MainLayout>
    );
  }
}

export default BuyCardMainPagePresentation;
