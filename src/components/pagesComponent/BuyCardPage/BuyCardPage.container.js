import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import BuyCardPagePresentation from "./BuyCardPage.presentation";
import { getCardsAction } from "../../../store/Modules/Cards/Actions";

class BuyCardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const { getCards } = this.props;
    getCards();
  }
  render() {
    const { getCards } = this.props;
    return <BuyCardPagePresentation />;
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
  )(BuyCardPage)
);
