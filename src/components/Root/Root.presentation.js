import React from "react";

// components
import Splash from "../Layout/Splash";
import AppRouter from "../../Router";

const RootPresentation = props => {
  return props.splash ? <Splash /> : <AppRouter />;
};

export default RootPresentation;
