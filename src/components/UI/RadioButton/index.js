import React from "react";

const RadioButton = props => {
  const { children, name, value, defaultChecked, onChange, checked } = props;
  return (
    <>
      <label className="radio-button">
        {children}
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={
            onChange ? e => onChange(e, e.target.parentNode.textContent) : null
          }
        />
        <span className="checkmark" />
      </label>
    </>
  );
};

export default RadioButton;
