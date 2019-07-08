import React from "react";

import Header from "../HomePage/header";
import Container from "../../UI/Container";
import Card from "../../UI/Card";
import Button from "../../UI/Button";

class RegisterCardPagePresentation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header />
        <Container>
          <div className="first-form-wrapper">
            <Card title="خرید کارت اعتباری ثبت‌نام">
              <div
                className="button-wrapper"
                onClick={() => this.props.history.push("/card/buy")}
              >
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

export default RegisterCardPagePresentation;
