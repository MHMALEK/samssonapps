import React from "react";
import SubmitInformationPagePresentation from "./SubmitInformationPage.presentation";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class SubmitInformationPage extends React.Component {
  render() {
    const { history } = this.props;
    return <SubmitInformationPagePresentation history={history} />;
  }
}

export default withRouter(
  connect(
    null,
    null
  )(SubmitInformationPage)
);
