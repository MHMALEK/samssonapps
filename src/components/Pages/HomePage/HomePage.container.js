import React from "react";
import HomePagePresentation from "./HomePage.presentation";

class HomePage extends React.Component {
  render() {
    const { history } = this.props;
    return <HomePagePresentation history={history} />;
  }
}

export default HomePage;
