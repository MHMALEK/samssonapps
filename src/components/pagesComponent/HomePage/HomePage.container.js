import React from "react";
import HomePagePresentation from "./HomePage.presentation";
import { connect, dispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { startApp } from "../../../store/Modules/App/Actions";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.startApp();
  }
  render() {
    const { history } = this.props;
    return <HomePagePresentation history={history} />;
  }
}

const mapDispatchToProps = dispatch => ({
  startApp: (currentPassword, password, passwordConfirmation) => {
    dispatch(startApp());
  }
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(HomePage)
);
