import React from "react";

const Card = props => {
  const { footer, title, children } = props;
  return (
    <div className="cardWrapper">
      <div className="title c-black bold"> {title} </div>
      <div className="content c-black">{children}</div>
      {footer && <div className="footer">{footer}</div>}
    </div>
  );
};

export default Card;
