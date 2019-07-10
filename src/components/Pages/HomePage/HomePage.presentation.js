import React from "react";
// import Layout
import MainLayout from "../../Layout/MainLayout";
import Container from "../../UI/Container";

const HomePagePresentation = props => {
  const navigateToCardPage = () => {
    props.history.push("/card/register");
  };
  return (
    <MainLayout>
      <Container>
        <div className="registration-form">
          <div
            className="registration-element"
            onClick={() => {
              navigateToCardPage();
            }}
          >
            <p>سامانه‌های ثبت نام و انتخاب رشته</p>
            <div className="icon-wrapper">
              <img src="icons/ic_arrow_blue.svg" />
            </div>
          </div>
          <div className="registration-element">
            <p>اعلام نتایج اولیه آزمون دکتری تخصصی سال ۹۸</p>
            <div className="icon-wrapper">
              <img src="icons/ic_arrow_blue.svg" />
            </div>
          </div>
          <div className="registration-element">
            <p>سامانه ثبت نام مصاحبه آزمون دکتری تخصصی سال ۹۸</p>
            <div className="icon-wrapper">
              <img src="icons/ic_arrow_blue.svg" />
            </div>
          </div>
        </div>
      </Container>
    </MainLayout>
  );
};

export default HomePagePresentation;
