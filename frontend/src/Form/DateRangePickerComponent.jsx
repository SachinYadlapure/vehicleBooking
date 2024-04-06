import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; 
import "react-date-range/dist/theme/default.css"; 

function DateRangePickerComponent() {
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleSelect = (ranges) => {
    setDateRange([ranges.selection]);
  };

  return (
    <div>
      <h4>Select Date Range:</h4>
      <DateRangePicker ranges={dateRange} onChange={handleSelect} />
    </div>
  );
}

export default DateRangePickerComponent;
