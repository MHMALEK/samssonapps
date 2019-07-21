import React from "react";
import { connect } from "react-redux";
import { addUserStoreAction } from "../../../store/Modules/Users/Actions";
import { updateNavbarStep } from "../../../store/Modules/UI/Actions";

const _AboutPage = props => {
  return (
    <div onClick={() => props.addUserStoreAction()}>
      {props.isOpen ? <p>true</p> : <p>false</p>}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    isOpen: state.Users.isOpen
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addUserStoreAction: () => {
      dispatch(updateNavbarStep(1));
    }
  };
};

// We normally do both in one step, like this:
const AboutPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(_AboutPage);

export default AboutPage;
