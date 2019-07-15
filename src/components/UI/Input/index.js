import React from "react";

const Input = props => {
  const { name, title, bgGray, onChange, value, placeHolder } = props;
  return (
    <div className="input-wrapper">
      <label htmlFor={name} className="input-lable">
        {title}
      </label>
      <input
        name={name}
        type={props.type}
        className={`input ${bgGray ? " bg-gray " : ""}`}
        onChange={e => onChange(e)}
        value={value}
        placeholder={placeHolder}
      />
    </div>
  );
};

export default Input;
