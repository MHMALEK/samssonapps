import React from "react";

const Accordion = props => {
  const { title, children, onClick, elementIndex, hide, expandable } = props;
  return (
    <div className="accordion">
      {title && (
        <div
          onClick={() => {
            return onClick ? onClick(elementIndex, !hide) : null;
          }}
          className="accordion-title"
        >
          <div>{title}</div>
          {expandable && (
            <>
              {hide && (
                <div className="accordion-icon">
                  <img src="/icons/ic_dropdown_white_line.svg" />
                </div>
              )}
              {!hide && (
                <div className="accordion-icon">
                  <img src="/icons/ic_dropdown_up_white_line.svg" />
                </div>
              )}
            </>
          )}
        </div>
      )}
      {children && (
        <div className={`accordion-content ${hide ? "hide-accordion" : ""} `}>
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
