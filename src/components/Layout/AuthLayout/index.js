import React from "react";
import { connect } from "react-redux";

import NavBar from "../NavBar";
import AuthHeader from "../AuthHeader";

const AuthLayout = props => {
  const { children, history, title } = props;
  return (
    <div className="auth-layout">
      <NavBar title="دانشگاه آزاد اسلامی" />
      <AuthHeader />
      {children}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    contactInformation: state.App.contactUs
  };
};
export default connect(
  mapStateToProps,
  null
)(AuthLayout);
