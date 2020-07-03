import React, { useState, useContext, useEffect } from "react";
import WeatherContext from "../../context/weather/weatherContext";
import M from "materialize-css/dist/js/materialize.min.js";
// import Countries from "../../components/change/Countries";

const AddChange = () => {
  const [location, setLocation] = useState("");

  useEffect(() => {
    /* weatherContext.changeLocation(); */
  }, []);

  // Initialize weatherContext
  const weatherContext = useContext(WeatherContext);

  const onSubmit = () => {
    if (location === "") {
      M.toast({ html: "Please enter a location" });
    } else {
      setLocation(weatherContext.clearData);

      setLocation(weatherContext.changeLocation);

      /* setLocation(weatherContext.changeLocation()); */

      /* console.log(weatherContext.changeLocation()); */

      // console.log(match.a)

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
