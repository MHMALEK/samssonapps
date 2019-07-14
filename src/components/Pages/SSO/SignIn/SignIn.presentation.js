import React from "react";
import AuthLayout from "../../../Layout/AuthLayout";

import Container from "../../../UI/Container";
const SignInSSOPresentation = props => {
  return (
    <AuthLayout history={props.history}>
      <Container>
        <div className="sign-in-box" />
      </Container>
    </AuthLayout>
  );
};

export default SignInSSOPresentation;
