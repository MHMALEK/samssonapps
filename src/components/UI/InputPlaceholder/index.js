import React from "react";
const InputPlaceholder = props => {
  const { children, title } = props;
  return (
    <div className="input-place-holder">
      <div className="input-place-holder-title">{title} :</div>
      <div className="input-place-holder-content">{children}</div>
    </div>
  );
};

export default InputPlaceholder;
