import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CardsMainPagePresentation from "./CardsMainPage.presentation";
import {
  getCardsAction,
  goToCardListAction
} from "../../../../store/Modules/Cards/Actions";

class CardsMainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.goTobuyCardPage = this.goTobuyCardPage.bind(this);
  }
  componentDidMount() {
    const { getCards } = this.props;
    getCards();
  }
  goTobuyCardPage() {
    const {  goToCardsList } = this.props;
    goToCardsList();
  }
  render() {
    const { history, cardsList } = this.props;
    return (
      <CardsMainPagePresentation
        history={history}
        cardsList={cardsList}
        goTobuyCardPageHandler={this.goTobuyCardPage}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    cardsList: state.Cards.cardsList
  };
};

const mapDispatchToProps = dispatch => ({
  getCards: () => {
    dispatch(getCardsAction());
  },
  goToCardsList: cardId => {
    dispatch(goToCardListAction(cardId));
  }
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CardsMainPage)
);
