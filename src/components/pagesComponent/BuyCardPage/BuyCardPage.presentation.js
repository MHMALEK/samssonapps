import React from "react";

import Header from "../HomePage/header";
import Container from "../../UI/Container";
import Card from "../../UI/Card";
import Button from "../../UI/Button";
import Title from "../../UI/Title";

class BuyCardPagePresentation extends React.Component {
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
            <Card title="توجه">
              <p className="c-red">
                داوطلبان لازم است قبل از خرید کارت اعتباری گروه آزمایشی رشته یا
                رشته‌های مورد نظر خود را شناسایی نمایند.
              </p>
              <div className="button-wrapper">
                <Button blueBg>فهرست رشته‌های مقطع کارشناسی پیوسته </Button>
              </div>
              <div className="button-wrapper">
                <Button blueBg>فهرست رشته‌های مقطع کاردانی ناپیوسته </Button>
              </div>
            </Card>
            <div className="card-review">
              <Button blueBg>بازیابی اطلاعات کارت خریداری شده </Button>
            </div>
            <div className="buy-new-card">
              <Title blue>خرید کارت اعتباری ثبت‌نام</Title>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default BuyCardPagePresentation;
