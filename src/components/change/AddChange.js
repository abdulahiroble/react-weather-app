import React, { useState, useContext } from "react";
import WeatherContext from "../../context/weather/weatherContext";
import M from "materialize-css/dist/js/materialize.min.js";

const AddChange = () => {
  // Initialize weatherContext
  const weatherContext = useContext(WeatherContext);

  const [location, setLocation] = useState("");

  const onSubmit = () => {
    if (location === "") {
      M.toast({ html: "Please enter a location" });
    } else {
      setLocation(weatherContext.changeLocation);

      // Clear state
      setLocation("");
    }
  };

  return (
    <div id="change-weather-info" className="modal">
      <div className="modal-content">
        <h6>Choose Location</h6>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="location"
              value={location}
              onChange={e => setLocation(e.target.value)}
            />
            <label htmlFor="message" className="active">
              Enter Location
            </label>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect blue btn"
        >
          Enter
        </a>
      </div>
    </div>
  );
};

export default AddChange;
