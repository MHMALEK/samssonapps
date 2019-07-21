import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.checkPersianValidation = this.checkPersianValidation.bind(this);
    this.onChangeWithValidation = this.onChangeWithValidation.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {
      value: "",
      hasError: false,
      errorMsg: ""
    };
  }

  componentWillReceiveProps(props) {
    if (props.value) {
      this.setState({
        value: props.value
      });
    }
  }

  checkPersianValidation(string) {
    var regex = /^[\u0600-\u06FF\uFB8A\u067E\u0686\u06AF7\u200C\u200F ]+$/;
    if (string.match(regex)) {
      return true;
    } else {
      return false;
    }
  }
  checkPhoneNumberValidation(string) {
    var phoneRegex = /^[0-9]{7,15}$/;
    var numberRegex = new RegExp("^[0-9]+$");

    if (string.length > 11 || !string.match(numberRegex)) {
      return false;
    } else {
      if (string.length === 11) {
        if (!string.match(phoneRegex)) {
          return false;
        } else {
          return true;
        }
      }
      return true;
    }
  }

  checkIranianNationalCode(input) {
    if (!/^\d{10}$/.test(input)) return false;

    var check = parseInt(input[9]);
    var sum = 0;
    var i;
    for (i = 0; i < 9; ++i) {
      sum += parseInt(input[i]) * (10 - i);
    }
    sum %= 11;

    return (sum < 2 && check == sum) || (sum >= 2 && check + sum == 11);
  }

  onChangeWithValidation(e) {
    const value = e.target.value;
    const { validation, getValidatedValue, name } = this.props;

    switch (validation) {
      case "onlyPersianValidation": {
        if (this.checkPersianValidation(value) || value == " " || value == "") {
          this.setState(
            {
              value,
              hasError: false,
              errorMsg: ""
            },
            () => {
              getValidatedValue(this.state.value, name);
            }
          );
        } else {
          this.setState({
            hasError: true,
            errorMsg: "فقط باید مقدار فارسی وارد شود"
          });
        }
        break;
      }
      case "phoneNumberValidation": {
        if (
          this.checkPhoneNumberValidation(value) ||
          value == " " ||
          value == ""
        ) {
          this.setState(
            {
              hasError: false,
              errorMsg: "",
              value
            },
            () => {
              getValidatedValue(this.state.value, name);
            }
          );
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
            console.log(value);
            if (this.checkIranianNationalCode(value)) {
              this.setState(
                {
                  value,
                  hasError: false,
                  errorMsg: ""
                },
                () => {
                  getValidatedValue(this.state.value, name);
                }
              );
            } else {
              this.setState({
                hasError: true,
                errorMsg: "شماره ملی وارد شده صحیح نیست"
              });
            }
          } else {
            this.setState(
              {
                value,
                hasError: false,
                errorMsg: ""
              },
              () => {
                getValidatedValue(this.state.value, name);
              }
            );
          }
        }
        break;
      }
      case "certificateIdValidation": {
        this.setState(
          {
            value
          },
          () => {
            getValidatedValue(value, name);
          }
        );
        break;
      }
      default:
        this.setState(
          {
            value
          },
          () => {
            getValidatedValue(value, name);
          }
        );
        break;
    }
  }

  onChange(e) {
    const { getValidatedValue, name } = this.props;
    this.setState(
      {
        value: e.target.value
      },
      () => {
        getValidatedValue(this.state.value, name);
      }
    );
  }

  render() {
    const {
      name,
      title,
      bgGray,
      placeHolder,
      disabled,
      validation,
      type,
      getValidatedValue
    } = this.props;
    const { hasError, errorMsg } = this.state;
    return (
      <>
        <div className="input-wrapper">
          <label htmlFor={name} className="input-lable">
            {title}
          </label>
          <input
            name={name}
            type={type}
            className={`input ${bgGray ? " bg-gray " : ""}`}
            onChange={
              validation
                ? e => this.onChangeWithValidation(e)
                : e => this.onChange(e)
            }
            defaultValue={this.props.value}
            placeholder={placeHolder}
            disabled={disabled}
            pattern={type === "phone" ? "[0-9]{3}-[0-9]{3}-[0-9]{4}" : null}
          />
        </div>
        {hasError && <div className="error-input">{errorMsg}</div>}
      </>
    );
  }
}

export default Input;
