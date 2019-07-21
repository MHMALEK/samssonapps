import React from "react";
import { connect } from "react-redux";
import MultiStepNavBar from "../../UI/MultiStepNavBar";

const NavBarWithSteps = props => {
  const { activeStep, steps } = props;
  return <MultiStepNavBar activeStep={activeStep} steps={steps} />;
};

const mapStateToProps = state => {
  return {
    activeStep: state.UI.currentStep,
    steps: state.UI.navBarSteps
  };
};
export default connect(
  mapStateToProps,
  null
)(NavBarWithSteps);
