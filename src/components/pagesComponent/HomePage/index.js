import React from "react";
import Header from "./header";
import Container from "../../UI/Container";
import Card from "../../UI/Card";
const HomePage = () => {
  return (
    <div>
      <Header />
      <Container>
        <div className="registration-form">
          <div class="registration-element">
            <p>سامانه‌های ثبت نام و انتخاب رشته</p>
            <div class="icon-wrapper">
              <img src="icons/ic_arrow_blue.svg" />
            </div>
          </div>
          <div class="registration-element">
            <p>اعلام نتایج اولیه آزمون دکتری تخصصی سال ۹۸</p>
            <div class="icon-wrapper">
              <img src="icons/ic_arrow_blue.svg" />
            </div>
          </div>
          <div class="registration-element">
            <p>سامانه ثبت نام مصاحبه آزمون دکتری تخصصی سال ۹۸</p>
            <div class="icon-wrapper">
              <img src="icons/ic_arrow_blue.svg" />
            </div>
          </div>
        </div>
      </Container>

      <div className="extra-content">
        <div className="container">
          <h4>ارتباط با ما</h4>
          <div className="desc">
            <p>
              داوطلبان گرامی در صورتی که سوالات شما در ارتباط با مرکز سنجش و
              پذیرش دانشگاه آزاد اسلامی است، می‌توانید از روش‌های ذیل به منظور
              اخذ پاسخ سوالات خود اقدام نمایید:
            </p>
          </div>
          <div className="cards-wrapper">
            <Card
              withOutShadow
              title="تماس تلفنی"
              footer={<p>تلفن گویا:‌021- 4743</p>}
            >
              <p>
                در صورت مواجه شدن با هرگونه مشکل، می‌توانید در روزهای شنبه تا
                چهارشنبه از ساعت ۸:۰۰ صبح الی ۱۲:۰۰ و ۱۳:۰۰ الی ۱۶:۰۰ با شماره
                تلفن گویای مرکز سنجش و پذیرش تماس حاصل فرمایید.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
