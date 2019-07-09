import React from "react";

const Logo = props => {
  return (
    <div className={`${props.className ? props.className : ""} logo-wrapper`}>
      <img className="logo" src="/logo/item_au_logo.png" />
    </div>
  );
};

export default Logo;
