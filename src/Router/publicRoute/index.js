import React from "react";
import { Route } from "react-router-dom";

const PublicRoute = props => {
  const { ComponentName, exact, path, hasNavbar } = props;
  return (
    <Route
      path={path}
      exact={exact}
      render={props => <ComponentName hasNavbar={hasNavbar} {...props} />}
    />
  );
};

export default PublicRoute;
