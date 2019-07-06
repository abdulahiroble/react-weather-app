import React from "react";
/* import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons"; */

const Ui = props => {
  const {
    ButtonDisabled,
    summaryText,
    temperatureText,
    dewPointText,
    humidityText,
    ozoneText,
    currentPressureText,
    visibilityText,
    windBearingText,
    windGustText,
    windSpeedText,
    spinner,
    showData,
    summary,
    temperature,
    dewPoint,
    ozone,
    pressure,
    visibility,
    windBearing,
    windGust,
    windSpeed,
    humidity
  } = props;
  // const element = <FontAwesomeIcon icon={faCoffee} />;

  function myFunc() {
    if (showData) {
      return showData;
    }
  }

  return (
    <div className="all-center">
      <h1>{props.title}</h1>
      <br />
      <button
        className="btn btn-dark"
        onClick={myFunc()}
        disabled={ButtonDisabled}
      >
        {props.button}
      </button>
      <br />
      <div>{spinner}</div>
      <h3>
        {summaryText[0]} {summary}
      </h3>
      <h3>
        {temperatureText[1]} {temperature}
      </h3>
      <h3>
        {dewPointText[2]} {dewPoint}
      </h3>
      <h3>
        {humidityText[3]} {humidity}
      </h3>
      <h3>
        {ozoneText[4]} {ozone}
      </h3>
      <h3>
        {currentPressureText[5]} {pressure}
      </h3>
      <h3>
        {visibilityText[6]} {visibility}
      </h3>
      <h3>
        {windBearingText[7]} {windBearing}
      </h3>
      <h3>
        {windGustText[8]} {windGust}
      </h3>
      <h3>
        {windSpeedText[9]} {windSpeed}
      </h3>
    </div>
  );
};

export default Ui;
