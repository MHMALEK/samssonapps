import React from "react";
import HomePagePresentation from "./HomePage.presentation";

class HomePage extends React.Component {
  render() {
    const { history, hasNavBar } = this.props;
    return <HomePagePresentation history={history} hasNavBar={hasNavBar} />;
  }
}

export default HomePage;
