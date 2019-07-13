import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import BuyCardMainPagePresentation from "./BuyCardMainPage.presentation";
import { getCardsAction } from "../../../store/Modules/Cards/Actions";

class BuyCardMainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const { getCards } = this.props;
    getCards();
  }
  render() {
    const { cardsList } = this.props;
    return <BuyCardMainPagePresentation cardsList={cardsList} />;
  }
}

const mapStateToProps = state => {
  console.log(state)
   return {
     cardsList: state.Cards.cardsList
   }
};

const mapDispatchToProps = dispatch => ({
  getCards: () => {
    // dispatch(getCardsAction());
  }
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(BuyCardMainPage)
);
