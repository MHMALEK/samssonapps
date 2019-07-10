import React from "react";
import { connect } from "react-redux";

// redux actions
import { startApp } from "../../store/Modules/App/Actions";

// components
import RootPresentation from "./Root.presentation";

class Root extends React.Component {
  componentWillMount() {
    const { startApp } = this.props;
    startApp();
  }
  render() {
    const { showSplash } = this.props;
    return <RootPresentation splash={showSplash} />;
  }
}
const mapStateToProps = state => {
  return {
    showSplash: state.App.showSplash
  };
};
const mapDispatchToProps = dispatch => ({
  startApp: () => {
    dispatch(startApp());
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root);
