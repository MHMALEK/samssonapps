import React from "react";

const Button = props => {
  const { blueBg, blueBorder, children, onClick } = props;
  return (
    <button
      className={`button 
        ${blueBg ? "blue-bg" : ""}
        ${blueBorder ? "blue-border" : ""}
        `}
      onClick={onClick ? onClick() : null}
    >
      {children}
    </button>
  );
};

export default Button;
