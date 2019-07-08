import React from "react";

const Input = props => {
  const {name, title, bgGray} = props;
  return (
    <div className="input-wrapper">
     <lable htmlfor={name} className="input-lable"> {title} </lable>
      <input name={name} type={props.type} className={`input ${bgGray ? ' bg-gray ' : '' }`} />
    </div>
    );
};

export default Input;
