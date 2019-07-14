import React from "react";

const NavBar = props => {
  const { title, history } = props;
  const hide = history ? history.location.pathname === "/" : false;
  const goBack = () => {
    history && history.goBack();
  };
  return (
    !hide && (
      <div className="nav-bar">
        <div className="back-button" onClick={() => goBack()}>
          <img src="/icons/ic_back_white_line.svg" alt="back button" />
        </div>
        <div className="nav-bar-info">{title}</div>
        <div />
      </div>
    )
  );
};

export default NavBar;
