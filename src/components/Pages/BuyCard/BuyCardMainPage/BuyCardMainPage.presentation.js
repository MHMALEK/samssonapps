import React from "react";

import TopHeader from "./Components/TopHeader";
import Container from "../../../UI/Container";
import Card from "../../../UI/Card";
import Button from "../../../UI/Button";
import Title from "../../../UI/Title";
import Price from "../../../UI/Price";
import MainLayout from "../../../Layout/MainLayout";
import EducationalModalList from "./Components/EducationalModalList";
import TeachingInstitutionModalList from "./Components/TeachingInstitutionModalList";

class BuyCardMainPagePresentation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
    this.selectCardToBuyAction = this.selectCardToBuyAction.bind(this);
  }

  selectCardToBuyAction(cardId) {
    const { selectCardToBuyAction, history } = this.props;
    console.log(cardId);
    selectCardToBuyAction();
    history.push("/card/user-info");
  }
  render() {
    const { cardsList, history } = this.props;
    return (
      <MainLayout history={history} title="خرید کارت اعتباری ثبت‌نام">
        <div className="buy-card-main-page">
          <Container>
            <div className="first-form-wrapper">
              <TopHeader />
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
                              <EducationalModalList card={card} />
                            )}
                        </div>
                        <div className="select-wrapper">
                          {card.teachingInstitution &&
                            card.teachingInstitution.length > 0 && (
                              <TeachingInstitutionModalList card={card} />
                            )}
                        </div>
                        <div className="button-wrapper">
                          <Button
                            blueBg
                            onClick={() => this.selectCardToBuyAction(card.id)}
                          >
                            خرید کارت
                          </Button>
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
