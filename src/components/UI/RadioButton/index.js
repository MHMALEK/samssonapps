import React from "react";

const RadioButton = props => {
  const { children, name, value, defaultChecked } = props;
  return (
    <>
      <label className="radio-button">
        {children}
        <input
          type="radio"
          name={name}
          value={value}
          defaultChecked={defaultChecked}
        />
        <span className="checkmark" />
      </label>
    </>
  );
};

export default RadioButton;
