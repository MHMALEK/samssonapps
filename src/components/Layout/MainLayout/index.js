import React from "react";
import { connect } from "react-redux";

import Header from "../Header";
import Footer from "../Footer";
import NavBar from "../NavBar";

const MainLayout = props => {
  const { children, contactInformation, history, title } = props;
  return (
    <div className="main-app-layout">
      <Header />
      <NavBar title={title} history={history} />
      {children}
      <Footer content={contactInformation} />
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
)(MainLayout);
