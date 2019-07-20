import React from "react";
import { Link } from "react-router-dom";
// import Layout
import MainLayout from "../../Layout/MainLayout";
import Container from "../../UI/Container";
const HomePagePresentation = props => {
  return (
    <MainLayout>
      <Container>
        <div className="registration-form">
          <Link className="registration-element" to="/card/list">
            <p>سامانه‌های ثبت نام و انتخاب رشته</p>
            <div className="icon-wrapper">
              <img src="icons/ic_arrow_blue.svg" alt="right-arrow-icon" />
            </div>
          </Link>

          <Link className="registration-element" to="/card/confirm">
            <p>اعلام نتایج اولیه آزمون دکتری تخصصی سال ۹۸</p>
            <div className="icon-wrapper">
              <img src="icons/ic_arrow_blue.svg" />
            </div>
          </Link>
          <Link className="registration-element" to="/card/user-info">
            <p>سامانه ثبت نام مصاحبه آزمون دکتری تخصصی سال ۹۸</p>
            <div className="icon-wrapper">
              <img src="icons/ic_arrow_blue.svg" />
            </div>
          </Link>
        </div>
      </Container>
    </MainLayout>
  );
};

export default HomePagePresentation;
