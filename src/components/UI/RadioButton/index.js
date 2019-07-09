import React from "react";

const RadioButton = props => {
  return (
    <div>
      <label htmlFor="malek" className="radio-button">
        One
        <input type="radio" name="malek" />
        <span className="checkmark" />
      </label>
      <label htmlFor="malek" className="radio-button">
        Two
        <input type="radio" name="malek" />
        <span className="checkmark" />
      </label>
      <label htmlFor="malek" className="radio-button">
        Three
        <input type="radio" name="malek" />
        <span className="checkmark" />
      </label>
    </div>
  );
};

export default RadioButton;
