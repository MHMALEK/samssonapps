import React from "react";

const Title = props => (
  <p className={`title ${props.blue ? "c-blue " : " "}`} />
);

export default Title;
