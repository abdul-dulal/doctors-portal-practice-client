import React from "react";

const AppService = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div class="card max-w-lg bg-base-100 shadow-xl">
      <div class="card-body items-center text-center">
        <h2 class="card-title">{name}</h2>
        <p>{slots[0]}</p>
        <p>
          {slots.length} {slots.length > 0 ? "speces" : "speace"}
        </p>
        <div class="card-actions">
          <label
            for="my-modal-6"
            onClick={() => setTreatment(service)}
            class="btn  modal-button"
          >
            open modal
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppService;
