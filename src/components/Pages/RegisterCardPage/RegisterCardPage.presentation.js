import React from "react";

import Container from "../../UI/Container";
import Card from "../../UI/Card";
import Button from "../../UI/Button";
import MainLayout from "../../Layout/MainLayout";

class RegisterCardPagePresentation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <MainLayout>
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
          <div className="section-title c-blue">ثبت نام و انتخاب رشته</div>
          <Card title="خرید کارت اعتباری ثبت‌نام">
            <div className="button-wrapper">
              <Button blueBg>خرید کارت اعتباری ثبت‌نام </Button>
            </div>
            <div className="button-wrapper">
              <Button blueBorder>بازیابی اطلاعات کارت خریداری شده</Button>
            </div>
          </Card>
        </Container>
      </MainLayout>
    );
  }
}

export default RegisterCardPagePresentation;
