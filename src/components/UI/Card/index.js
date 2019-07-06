import React from "react";

const Card = props => {
  return (
    <div className="cardWrapper">
      <div class="title"> {props.title} </div>
      <div class="content">
        <p>{props.children}</p>
      </div>
      <div className="footer">{props.footer}</div>
    </div>
  );
};

export default Card;
