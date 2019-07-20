import React from "react";

const Price = props => {
  const { children, className } = props;
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return <p className={className}>{numberWithCommas(children)} ریال</p>;
};

export default Price;
