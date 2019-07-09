import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import RegisterCardPagePresentation from "./RegisterCardPage.presentation";
import { getCardsAction } from "../../../store/Modules/Cards/Actions";

class RegisterCardPage extends React.Component {
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
    return <RegisterCardPagePresentation history={history} />;
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
  )(RegisterCardPage)
);
