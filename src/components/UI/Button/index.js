import React from "react";

const Button = props => {
  const { blueBg, blueBorder, children } = props;
  return (
    <button
      className={`button 
        ${blueBg ? "blue-bg" : ""}
        ${blueBorder ? "blue-border" : ""}
        `}
    >
      {children}
    </button>
  );
};

export default Button;
