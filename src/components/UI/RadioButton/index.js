import React from "react";

const RadioButton = props => {
  const { children, name, value, defaultChecked, onChange } = props;
  return (
    <>
      <label className="radio-button">
        {children}
        <input
          type="radio"
          name={name}
          value={value}
          defaultChecked={defaultChecked}
          onChange={
            onChange
              ? e => onChange(e, e.currentTarget.parentNode.textContent)
              : null
          }
        />
        <span className="checkmark" />
      </label>
    </>
  );
};

export default RadioButton;
