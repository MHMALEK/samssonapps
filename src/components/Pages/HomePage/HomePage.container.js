import React from "react";
import HomePagePresentation from "./HomePage.presentation";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { history } = this.props;
    return <HomePagePresentation history={history} />;
  }
}

export default withRouter(
  connect(
    null,
    null
  )(HomePage)
);
