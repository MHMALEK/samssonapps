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

const mapStateToProps = state => {};
export default withRouter(
  connect(
    mapStateToProps,
    null
  )(HomePage)
);
