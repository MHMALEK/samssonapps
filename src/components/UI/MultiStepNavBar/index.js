import React from "react";

const MultiStepNavBar = props => {
  const { activeStep, steps } = props;
  return (
    <div className="nav-bar multi-step">
      {steps &&
        steps.map((step, index) => {
          return (
            <div key={index} className={`step-item step-${index}`}>
              <div className="step-icon">
                {index < activeStep ? (
                  <img
                    className="step-done"
                    src="/icons/ic_step_done.svg"
                    alt="has been done"
                  />
                ) : (
                  <div
                    className={`step-icon-circle ${
                      index === activeStep ? "active-step" : null
                    }`}
                  >
                    <span> {step.index + 1} </span>
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
