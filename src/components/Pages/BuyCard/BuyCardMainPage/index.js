import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { selectCardToBuyAction } from "../../../../store/Modules/Cards/Actions";
import { showNotificationAction } from "../../../../store/Modules/UI/Actions";
import MainLayout from "../../../Layout/MainLayout";
import Container from "../../../UI/Container";
import TopHeader from "./Components/TopHeader";
import Title from "../../../UI/Title";
import BuyCardItem from "./Components/BuyCardItem";
import Button from "../../../UI/Button";
class BuyCardMainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.selectCardToBuy = this.selectCardToBuy.bind(this);
  }

  selectCardToBuy(cardId, educationSystem, teachingInstitution) {
    const { selectCardToBuy } = this.props;
    selectCardToBuy(cardId, educationSystem, teachingInstitution);
  }
  render() {
    const { cardsList, history, showNotificationAction } = this.props;
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
                cardsList.map((card, index) => {
                  return (
                    <BuyCardItem
                      cardData={card}
                      key={index}
                      history={history}
                      selectCardToBuy={this.selectCardToBuy}
                      onErrorCallBack={showNotificationAction}
                    />
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

const mapStateToProps = state => {
  return {
    cardsList: state.Cards.cardsList
  };
};

const mapDispatchToProps = dispatch => ({
  selectCardToBuy: (card_id, education_system_id, teaching_institution_id) => {
    dispatch(
      selectCardToBuyAction(
        card_id,
        education_system_id,
        teaching_institution_id
      )
    );
  },
  showNotificationAction: text => {
    dispatch(showNotificationAction(text));
  }
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(BuyCardMainPage)
);
