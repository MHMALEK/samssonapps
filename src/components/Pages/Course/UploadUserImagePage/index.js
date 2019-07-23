import React from "react";
import { Link } from "react-router-dom";
import Accordion from "../../../UI/Accordion";
import Container from "../../../UI/Container";
import NavBarWithSteps from "../../../Layout/\u0654NavBarWithSteps";
import Button from "../../../UI/Button";
import ImageUploader from "../../../UI/ImageUploader";

const UploadUserImagePage = props => {
  const getFinalResult = imageFile => {};

  return (
    <div className="layout-wrapper">
      <NavBarWithSteps />
      <div className="upload-user-image">
        <Container>
          <Accordion title="بارگذاری عکس داوطلب">
            <p className="c-red">
              حجم فایل عکس داوطلب باید کمتر از ۱۰۰ کیلوبایت و با فرمت JPG باشد.
            </p>
            <div className="uploaded-image">
              <ImageUploader
                showImagePreview
                getFinalResult={getFinalResult}
                showInDefaultPreviewBox={true}
                maxSizeInKb="100"
              />
            </div>
          </Accordion>
          <div className="call-to-actions">
            <div className="call-to-action-button">
              <div onClick={() => props.history.goBack()}>
                <Button blueBorder>مرحله قبل</Button>
              </div>
            </div>
            <div className="call-to-action-button">
              <Button blueBg onClick={() => this.submitInformationHandler()}>
                مرحله بعد
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default UploadUserImagePage;
