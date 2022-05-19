import { format } from "date-fns";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../firebase.Init";
import "react-toastify/dist/ReactToastify.css";

const BookingModal = ({ treatment, date }) => {
  const [user] = useAuthState(auth);
  const { name, slots } = treatment;
  const formatedDate = format(date, "PP");

  const handleSubmit = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    const booking = {
      paitent: user?.email,
      date: formatedDate,
      slot: slot,
      treatment: name,
    };
    fetch("http://localhost:4000/booking", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          toast("success added");
        }
      })
      .catch((error) => {
        if (error) {
          toast("already added");
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="my-modal-6" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={name}
              disabled
              class="input w-full max-w-xs"
            />
            <select name="slot" class="select select-bordered w-full max-w-xs">
              {slots.map((slot) => (
                <option value={slot} key={Math.random()}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              value={formatedDate}
              class="input w-full max-w-xs"
            />
            <input
              type="number"
              placeholder="phone number"
              class="input w-full max-w-xs"
            />

            <input type="submit" value="submit" className="btn btn-primary" />
          </form>
          <div class="modal-action">
            <label for="my-modal-6" class="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
