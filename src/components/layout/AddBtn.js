import React from "react";

const AddBtn = () => {
  return (
    <div className="fixed-action-btn">
      <a href="#change-weather-info" className="modal-trigger">
        <button className="btn blue darken-2">Change Location</button>
      </a>
      <br />
      <br />
      <a href="#clear">
        <button className="btn red darken-2">CLEAR</button>
      </a>
    </div>
  );
};

export default AddBtn;
