import React, { useState } from "react";
import AppoinmentBanner from "./AppoinmentBanner";
import AvailAbleAppointment from "./AvailAbleAppointment";

const Appoinment = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <AppoinmentBanner date={date} setDate={setDate} />
      <AvailAbleAppointment date={date} />
    </div>
  );
};

export default Appoinment;
