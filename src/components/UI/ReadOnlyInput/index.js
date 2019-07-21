import React from "react";

const ReadOnlyInput = props => {
  const { title, children } = props;
  return (
    <div className="readonly-input">
      <div className="readonly-input-title">{title}</div>
      <div className="readonly-input-content">ss{children}</div>
    </div>
  );
};
export default ReadOnlyInput;
