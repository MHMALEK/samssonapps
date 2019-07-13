import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CardsMainPagePresentation from "./CardsMainPage.presentation";
import { getCardsAction } from "../../../store/Modules/Cards/Actions";

class CardsMainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const { getCards } = this.props;
    getCards();
  }
  render() {
    const { history } = this.props;
    return <CardsMainPagePresentation history={history} />;
  }
}

const mapStateToProps = state => {
  // console.log(state);
};

const mapDispatchToProps = dispatch => ({
  getCards: () => {
    dispatch(getCardsAction());
  }
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(CardsMainPage)
);
