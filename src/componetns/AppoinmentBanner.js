import React, { useState } from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
const AppoinmentBanner = ({ date, setDate }) => {
  return (
    <div>
      <DayPicker mode="single" selected={date} onSelect={setDate} />{" "}
    </div>
  );
};

export default AppoinmentBanner;
