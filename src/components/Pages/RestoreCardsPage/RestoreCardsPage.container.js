import React from "react";
import RestoreCardsPagePresentation from "./RestoreCardsPage.presentation";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class RestoreCardsPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { history } = this.props;
    const navBarStepsData = [
      {
        id: 1,
        index: 1,
        title: "دریافت اطلاعات فردی",
        done: true
      },
      {
        id: 2,
        index: 2,
        title: "لیست کارت‌های خریداری شده",
        done: false
      }
    ];
    return (
      <RestoreCardsPagePresentation
        history={history}
        navBarSteps={navBarStepsData}
      />
    );
  }
}

const mapStateToProps = state => {};
export default withRouter(
  connect(
    mapStateToProps,
    null
  )(RestoreCardsPage)
);
