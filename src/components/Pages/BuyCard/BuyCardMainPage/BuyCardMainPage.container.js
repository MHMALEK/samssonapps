import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import BuyCardMainPagePresentation from "./BuyCardMainPage.presentation";
import { selectCardToBuyAction } from "../../../../store/Modules/Cards/Actions";

class BuyCardMainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { cardsList, history, selectCardToBuyAction } = this.props;
    return (
      <BuyCardMainPagePresentation
        history={history}
        cardsList={cardsList}
        selectCardToBuyAction={selectCardToBuyAction}
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
  selectCardToBuyAction: (cardId, educationSystem, teachingInstitution) => {
    dispatch(selectCardToBuyAction(cardId, educationSystem, teachingInstitution));
  }
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(BuyCardMainPage)
);
