import React from "react";
// import Layout
import Container from "../../UI/Container";
import Accordion from "../../UI/Accordion";
import Input from "../../UI/Input";
import Button from "../../UI/Button";
import MultiStepNavBar from "../../UI/MultiStepNavBar";

const RestoreCardsPagePresentation = props => {
  const navigateToCardPage = () => {
    props.history.push("/cards/list");
  };
  const { navBarSteps } = props;
  return (
    <div className="layout-wrapper">
      <MultiStepNavBar steps={navBarSteps} />
      <Container>
        <p>بازیابی اطلاعات کارت خریداری شده</p>

        <Accordion title="اطلاعات فردی و شناسنامه‌ای">
          <div className="inputs-wrapper">
            <Input bgGray title="نام" />
            <Input bgGray title="نام خانوادگی" />
          </div>
          <div className="inputs-wrapper">
            <Input bgGray title="شماره شناسنامه" />
            <Input bgGray title="شماره تلفن همراه" />
          </div>
          <div className="inputs-wrapper full-width">
            <Input bgGray title="کد ملی / کد اتباع خارجی" />
          </div>
        </Accordion>
        <div className="call-to-actions">
          <Button blueBg>نمایش</Button>
        </div>
      </Container>
    </div>
  );
};

export default RestoreCardsPagePresentation;
