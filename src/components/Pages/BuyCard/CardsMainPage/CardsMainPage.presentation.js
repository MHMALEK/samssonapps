import React from "react";
import {Link } from 'react-router-dom';
import Container from "../../../UI/Container";
import Card from "../../../UI/Card";
import Button from "../../../UI/Button";
import MainLayout from "../../../Layout/MainLayout";

class CardsMainPagePresentation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { cardsList, history } = this.props;
    return (
      <MainLayout history={history} title="سامانه‌های ثبت‌نام و انتخاب رشته">
        <Container>
          <div className="first-form-wrapper">
            <Card title="خرید کارت اعتباری ثبت‌نام">
              <Link to="/card/buy" className="button-wrapper">
                <Button blueBg>خرید کارت اعتباری ثبت‌نام </Button>
              </Link>
              <div className="button-wrapper">
                <Button blueBorder>بازیابی اطلاعات کارت خریداری شده</Button>
              </div>
            </Card>
          </div>
          <div className="section-title c-blue">ثبت نام و انتخاب رشته</div>
          {cardsList &&
            cardsList.map(card => {
              return (
                <Card key={card.id} title={card.title}>
                  <p>{card.description}</p>
                  <div className="button-wrapper">
                    <Button blueBg> ثبت نام و انتخاب رشته</Button>
                  </div>
                  {card.files &&
                    card.files.map((file, index) => {
                      return (
                        <a key={index} href={file.url}>
                          <div className="button-wrapper">
                            <Button blueBorder>{file.name}</Button>
                          </div>
                        </a>
                      );
                    })}
                </Card>
              );
            })}
          <div className="section-title c-blue">دکتری تخصصی سال ۹۸</div>
          <Card title="اعلام نتایج اولیه آزمون دکتری تخصصی سال ۹۸">
            <div className="button-wrapper">
              <Button blueBg>ورود به سامانه</Button>
            </div>
          </Card>
          <Card title="ثبت‌نام مصاحبه آزمون دکتری تخصصی سال ۹۸">
            <div className="button-wrapper">
              <Button blueBg>ورود به سامانه</Button>
            </div>
          </Card>
        </Container>
      </MainLayout>
    );
  }
}

export default CardsMainPagePresentation;
