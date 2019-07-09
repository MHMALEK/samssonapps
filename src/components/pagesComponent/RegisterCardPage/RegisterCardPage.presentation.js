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
          <div className="section-title c-blue">
             ثبت نام و انتخاب رشته
            </div>
            <Card title="خرید کارت اعتباری ثبت‌نام">
                <div className="button-wrapper">
                  <Button blueBg>خرید کارت اعتباری ثبت‌نام </Button>
                </div>
                <div className="button-wrapper">
                  <Button blueBorder>بازیابی اطلاعات کارت خریداری شده</Button>
                </div>
            </Card>
        </Container>
        <div className="bottom-register">
        <Container>
              <div class="section-title c-white">
                ارتباط با ما
              </div>
              <p class="c-white">
              داوطلبان گرامی در صورتی که سوالات شما در ارتباط با مرکز سنجش و پذیرش دانشگاه آزاد اسلامی است، می‌توانید از روش‌های ذیل به منظور اخذ پاسخ سوالات خود اقدام نمایید:
              </p>
              <Card title="تماس تلفنی" footer={<p className="c-blue">تلفن گویا: ۴۷۴۳ - ۰۲۱</p>}>
              در صورت مواجه شدن با هرگونه مشکل، می‌توانید در روزهای شنبه تا چهارشنبه از ساعت ۸:۰۰ صبح الی ۱۲:۰۰ و ۱۳:۰۰ الی ۱۶:۰۰ با شماره تلفن گویای مرکز سنجش و پذیرش تماس حاصل فرمایید.
            </Card>
            <Card title="خرید کارت اعتباری ثبت‌نام">
                <div className="button-wrapper">
                  <Button blueBg>خرید کارت اعتباری ثبت‌نام </Button>
                </div>
                <div className="button-wrapper">
                  <Button blueBorder>بازیابی اطلاعات کارت خریداری شده</Button>
                </div>
            </Card>
            <Card title="خرید کارت اعتباری ثبت‌نام">
                <div className="button-wrapper">
                  <Button blueBg>خرید کارت اعتباری ثبت‌نام </Button>
                </div>
                <div className="button-wrapper">
                  <Button blueBorder>بازیابی اطلاعات کارت خریداری شده</Button>
                </div>
            </Card>
          </Container>
      </div>
      </div>
    );
  }
}

export default RegisterCardPagePresentation;
