import React from "react";

const Input = props => {
  const { name, title, bgGray } = props;
  return (
    <div className="input-wrapper">
      <label htmlFor={name} className="input-lable">
        {title}{" "}
      </label>
      <input
        name={name}
        type={props.type}
        className={`input ${bgGray ? " bg-gray " : ""}`}
      />
    </div>
  );
};

export default Input;
