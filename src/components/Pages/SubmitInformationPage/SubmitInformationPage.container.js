import React from "react";
import SubmitInformationPagePresentation from "./SubmitInformationPage.presentation";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class SubmitInformationPage extends React.Component {
  render() {
    const { history } = this.props;
    const navBarStepsData = [
      {
        id: 1,
        index: 1,
        title: "ثبت اطلاعات فردی",
        done: true
      },
      {
        id: 2,
        index: 2,
        title: "تایید اطلاعات",
        done: false
      },
      {
        id: 3,
        index: 3,
        title: "دریافت کارت اعتباری",
        done: false
      }
    ];
    return (
      <SubmitInformationPagePresentation
        navBarSteps={navBarStepsData}
        history={history}
      />
    );
  }
}

export default withRouter(
  connect(
    null,
    null
  )(SubmitInformationPage)
);
