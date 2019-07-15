import React from "react";
import { connect } from "react-redux";

import VerifySSOPresentation from "./Verify.presentation";
import { verifyWithPhoneSSOAction } from "../../../../store/Modules/AuthSSO/Actions";

class VerifySSO extends React.Component {
  constructor(props) {
    super(props);
    this.verifyCodeHandler = this.verifyCodeHandler.bind(this);
    this.state = {
      verifyCode: ""
    };
  }
  verifyCodeHandler(event) {
    const value = event.target.value;
    this.setState({
      verifyCode: value
    });
  }
  render() {
    const { showTimer, verifyAction } = this.props;
    const { verifyCode } = this.state.verifyCode;
    return (
      <VerifySSOPresentation
        showTimer={showTimer}
        verifyCodeHandler={this.verifyCodeHandler}
        verifyCodeValue={verifyCode}
        verifyAction={verifyAction}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    showTimer: state.AuthSSO.initTimer,
    phoneNumber: state.AuthSSO.phoneNumber
  };
};

const MapDispatchToProps = dispatch => {
  return {
    verifyAction: verifyCode => {
      dispatch(verifyWithPhoneSSOAction(verifyCode));
    }
  };
};

export default connect(
  mapStateToProps,
  MapDispatchToProps
)(VerifySSO);
