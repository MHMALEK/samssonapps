import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { selectCardToBuyAction } from "../../../../store/Modules/Cards/Actions";
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
  }
  render() {
    const { cardsList, history, selectCardToBuyAction } = this.props;
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
                      selectCardToBuyAction={selectCardToBuyAction}
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
  selectCardToBuyAction: (cardId, educationSystem, teachingInstitution) => {
    dispatch(
      selectCardToBuyAction(cardId, educationSystem, teachingInstitution)
    );
  }
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(BuyCardMainPage)
);
