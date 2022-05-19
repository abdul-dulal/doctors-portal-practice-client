import { format } from "date-fns";
import React, { useEffect, useState } from "react";

const Service = ({ service, setTreat, date }) => {
  const { name, slots } = service;

  return (
    <div>
      <div class="card  bg-base-100 shadow-xl">
        <div class="card-body items-center text-center">
          <h2 class="card-title">{name}</h2>
          <p>
            {slots[0]}{" "}
            <span className="text-red-700 text-xl">
              {" "}
              {slots.length ? "" : "not available"}
            </span>
          </p>
          <div class="card-actions">
            <label
              for="my-modal-6"
              class="btn modal-button  btn-primary"
              disabled={slots.length === 0}
              onClick={() => setTreat(service)}
            >
              Buy Now
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
