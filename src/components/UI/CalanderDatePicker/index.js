import React from "react";
import DatePicker from "react-persian-calendar-date-picker";

class CalanderDatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDay: null
    };
    this.setSelectedDay = this.setSelectedDay.bind(this);
  }
  setSelectedDay(date) {
    console.log(date);
  }
  render() {
    const { selectedDay } = this.state;
    return (
      <DatePicker
        selectedDay={selectedDay}
        onChange={this.setSelectedDay}
        inputPlaceholder="انتخاب روز"
      />
    );
  }
}

export default CalanderDatePicker;
