import React from "react";
import Button from "../Button";

class ImageUploader extends React.Component {
  constructor(props) {
    super(props);
    this.fileChangedHandler = this.fileChangedHandler.bind(this);
    this.showImagePreview = this.showImagePreview.bind(this);
    this.validateSize = this.validateSize.bind(this);
    this.state = {
      imageUrl: null,
      file: null,
      fileSizeError: false,
      errorMsg: "سایز فایل آپلود شده بیشتر از ۱۰۰ کیلوبایت است"
    };
  }

  validateSize(file) {
    const { maxSizeInKb } = this.props;
    var FileSize = file.size / 1024;
    if (FileSize > maxSizeInKb) {
      return false;
    } else {
      return true;
    }
  }
  fileChangedHandler(e) {
    const { fileChangedHandler, getImageObject, showImagePreview } = this.props;
    const file = e.target.files[0];
    const isFileSizeOk = this.validateSize(file);
    if (isFileSizeOk) {
      this.setState({
        fileSizeError: false
      });
      if (fileChangedHandler) {
        fileChangedHandler(e);
      }
      if (getImageObject) {
        getImageObject(file);
      }
      if (showImagePreview) {
        this.setState(
          {
            file
          },
          () => {
            this.showImagePreview();
          }
        );
      }
    } else {
      this.setState({
        fileSizeError: true
      });
    }
  }
  showImagePreview() {
    let reader = new FileReader();
    const { file } = this.state;
    const { getFinalResult } = this.props;
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      if (getFinalResult) {
        getFinalResult(reader.result);
      }
      this.setState({ imageUrl: reader.result });
    };
  }
  render() {
    const { showInDefaultPreviewBox } = this.props;
    const { imageUrl, fileSizeError, errorMsg } = this.state;

    return (
      <div className="upload-image-container">
        {showInDefaultPreviewBox && (
          <>
            {imageUrl && (
              <div className="final-uploaded-image">
                <img src={this.state.imageUrl} />
              </div>
            )}
            {!imageUrl && (
              <div className="before-upload-preview">
                <img src="/icons/ic_upload_image.svg" />
              </div>
            )}
          </>
        )}
        {!imageUrl ? (
          <div className="upload-image-button-wrapper">
            <input
              type="file"
              onChange={e => this.fileChangedHandler(e)}
              accept="image/*;capture=camera"
            />

            <div className="select-image-button">
              <Button blueBg>انتخاب عکس</Button>
            </div>
          </div>
        ) : (
          <div className="upload-image-button">
            <Button blueBg>بارگذاری عکس</Button>
          </div>
        )}
        {fileSizeError && (
          <div className="error c-red margin-top-bottom-20">{errorMsg}</div>
        )}
      </div>
    );
  }
}

export default ImageUploader;
