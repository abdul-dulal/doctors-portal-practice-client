import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.Init";
const MyAppointment = () => {
  const [appoinment, setAppoinment] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    const email = user?.email;
    if (user) {
      fetch(`http://localhost:4000/booking?paitent=${email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            localStorage.removeItem("accessToken");
            navigate("/");
          }

          return res.json();
        })
        .then((data) => setAppoinment(data));
    }
  }, [user]);

  return (
    <div>
      <h1>MyAppointment: {appoinment.length}</h1>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <th>Name</th>
            <th>date</th>
            <th>Time</th>
            <th>Treatment</th>
          </thead>
          <tbody>
            {appoinment.map((app) => (
              <tr>
                <td>{app.paitent}</td>
                <td>{app.date}</td>
                <td>{app.slot}</td>
                <td>{app.treatment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
