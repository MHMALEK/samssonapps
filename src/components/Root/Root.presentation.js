import React from "react";

// components
import Splash from "../Layout/Splash";
import AppRouter from "../../Router";
import ErrorBoundary from "../Layout/ErrorBundaries";

const RootPresentation = props => {
  return props.splash ? (
    <Splash />
  ) : (
    <ErrorBoundary>
      <AppRouter />
    </ErrorBoundary>
  );
};

export default RootPresentation;
