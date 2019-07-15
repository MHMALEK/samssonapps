import React from "react";
import Countdown from "react-countdown-now";

const Timer = props => {
  const { duration, onComplete } = props;
  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return onComplete;
    } else {
      // Render a countdown
      return (
        <span>
          {minutes}:{seconds}
        </span>
      );
    }
  };
  return (
    <Countdown
      zeroPadTime={2}
      renderer={renderer}
      date={Date.now() + duration}
    />
  );
};

export default Timer;
