import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import SamanehPagePresentation from "./SamanehPage.presentation";
import { getCardsAction } from "../../../store/Modules/Cards/Actions";

class SamanehPage extends React.Component {
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
    return <SamanehPagePresentation />;
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
  )(SamanehPage)
);
