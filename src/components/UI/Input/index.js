import React from "react";
import {
  persianCharacterValidation,
  phoneNumberValidation,
  nationalCodeValidation
} from "./validations";
class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      hasError: false
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.validatedAndPassToParent = this.validatedAndPassToParent.bind(this);
    this.hasNoError = this.hasNoError.bind(this);
    this.checkIfDataIsValid = this.checkIfDataIsValid.bind(this);
  }

  componentDidMount() {
    if (this.props.defaultValue) {
      this.setState({
        value: this.props.defaultValue
      });
    }
  }

  handleOnChange(e) {
    const value = e.target.value;
    const { validation } = this.props;
    if (validation) {
      this.onChangeWithValidation(value);
    } else {
      this.hasNoError();
      this.validatedAndPassToParent(value);
    }
  }

  checkIfDataIsValid() {
    if (this.state.hasError === false) {
      return true;
    } else {
      return false;
    }
  }

  hasNoError() {
    this.setState({
      hasError: false,
      errorMsg: ""
    });
  }
  validatedAndPassToParent(value) {
    const { getInputValue, name } = this.props;
    this.setState({ value }, () => {
      getInputValue(this.state.value, name);
    });
  }
  onChangeWithValidation(value) {
    const { validation } = this.props;
    switch (validation) {
      case "onlyPersianValidation": {
        if (persianCharacterValidation(value) || value == " " || value == "") {
          this.hasNoError();
          this.validatedAndPassToParent(value);
        } else {
          this.setState({
            hasError: true,
            errorMsg: "فقط باید مقدار فارسی وارد شود"
          });
        }
        break;
      }
      case "phoneNumberValidation": {
        if (phoneNumberValidation(value) || value == " " || value == "") {
          this.hasNoError();
          this.validatedAndPassToParent(value);
        } else {
          this.setState({
            hasError: true,
            errorMsg: "شماره تلفن وارد شده صحیح نیست"
          });
        }
        break;
      }

      case "nationalityIdValidation": {
        if (value.length < 11) {
          if (value.length === 10) {
            if (nationalCodeValidation(value)) {
              this.hasNoError();
              this.validatedAndPassToParent(value);
            } else {
              this.setState({
                hasError: true,
                errorMsg: "شماره ملی وارد شده صحیح نیست"
              });
            }
          } else {
            this.hasNoError();
            this.validatedAndPassToParent(value);
          }
        }
        break;
      }
      case "certificateIdValidation": {
        this.hasNoError();
        this.validatedAndPassToParent(value);
        break;
      }
      default:
        this.setState({}, () => {
          this.hasNoError();
          this.validatedAndPassToParent(value);
        });
        break;
    }
  }

  render() {
    const {
      name,
      title,
      bgGray,
      placeHolder,
      disabled,
      type,
      pattern
    } = this.props;
    const { hasError, errorMsg, value } = this.state;
    return (
      <>
        <div className="input-wrapper">
          <label htmlFor={name} className="input-lable">
            {title}
          </label>
          <input
            name={name}
            type={type || "text"}
            pattern={pattern}
            className={`input ${bgGray ? " bg-gray " : ""}`}
            onChange={e => this.handleOnChange(e)}
            placeholder={placeHolder}
            disabled={disabled}
            value={value}
          />
          {hasError && <div className="error-input">{errorMsg}</div>}
        </div>
      </>
    );
  }
}

export default Input;
