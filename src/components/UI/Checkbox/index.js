import React from "react";
const Checkbox = props => {
  const { name, defaultChecked } = props;
  return <input type="checkbox" name={name} defaultChecked={defaultChecked} />;
};

export default Checkbox;
