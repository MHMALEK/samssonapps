import React from "react";

const Select = props => {
  const { children, name, title, placeHolder, className, hasIcon } = props;
  return (
    <div className="select-wrapper">
      {title && (
        <label className="c-light-gray select-lable" for={name}>
          {title}
        </label>
      )}
      <select name={name} placeholder={placeHolder} className="select-element">
        <option value="" disabled selected>
          انتخاب کنید
        </option>

        {children &&
          children.map(item => {
            return item;
          })}
      </select>
      {hasIcon && (
        <div className="select-icon">
          <img src="/icons/ic_dropdown_blue.svg" alt="select-arrow-down" />
        </div>
      )}
    </div>
  );
};

export default Select;
