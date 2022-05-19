import React, { useEffect, useState } from "react";
import AppService from "./AppService";
import BookingModal from "../componetns/BookingModal";
import { format } from "date-fns";

const AvailAbleAppointment = ({ date }) => {
  const [services, setService] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const formattedDate = format(date, "PP");
  // useEffect(() => {
  //   fetch(`http://localhost:4000/service`)
  //     .then((res) => res.json())
  //     .then((data) => setService(data));
  // }, []);
  useEffect(() => {
    fetch(`http://localhost:4000/available?date=${formattedDate}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [formattedDate]);
  return (
    <div>
      <p className="text-center">{format(date, "PP")}</p>
      <div className="grid grid-cols-3 gap-5">
        {services.map((service) => (
          <AppService
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          />
        ))}
      </div>
      {treatment && <BookingModal treatment={treatment} date={date} />}
    </div>
  );
};

export default AvailAbleAppointment;
