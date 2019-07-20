import React from "react";

const Button = props => {
  const { blueBg, blueBorder, children, onClick, disabled } = props;
  return (
    <button
      className={`button 
        ${blueBg ? "blue-bg" : ""}
        ${blueBorder ? "blue-border" : ""}
        ${disabled ? "disabled" : ""}
        `}
      onClick={onClick ? onClick : null}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
