import React from "react";

const MultiStepNavBar = props => {
  return (
    <div className="nav-bar multi-step">
      {props.steps &&
        props.steps.map((step, index) => {
          return (
            <div key={index} className={`step-item step-${index}`}>
              <div className="step-icon">
                {step.done ? (
                  <img
                    className="step-done"
                    src="/icons/ic_step_done.svg"
                    alt="has been done"
                  />
                ) : (
                  <div className="step-icon-circle">
                    <span> {step.index} </span>
                  </div>
                )}
              </div>
              <span> {step.title} </span>
            </div>
          );
        })}
    </div>
  );
};

export default MultiStepNavBar;
