import React from "react";

const Title = props => (
  <h2 className={`title ${props.blue ? "c-blue " : " "}`}>{props.children} </h2>
);

export default Title;
