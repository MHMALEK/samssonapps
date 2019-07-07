import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Header from "../HomePage/header";
import Container from "../../UI/Container";
import Card from "../../UI/Card";
import Button from "../../UI/Button";

class RegisterationMainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header />
        <Container>
          <div class="first-form-wrapper">
            <Card title="خرید کارت اعتباری ثبت‌نام">
              <div className="button-wrapper">
                <Button blueBg>خرید کارت اعتباری ثبت‌نام </Button>
              </div>
              <div className="button-wrapper">
                <Button blueBorder>بازیابی اطلاعات کارت خریداری شده</Button>
              </div>
            </Card>
          </div>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
};

const mapDispatchToProps = () => {};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(RegisterationMainPage)
);
