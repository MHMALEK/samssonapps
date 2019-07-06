import React from "react";

const Card = props => {
  return (
    <div className="cardWrapper">
      <div className="title c-black bold"> {props.title} </div>
      <div className="content c-black">
        {props.children}
      </div>
      <div className="footer">{props.footer}</div>
    </div>
  );
};

export default Card;
