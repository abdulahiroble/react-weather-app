import React from "react";

const Ui = props => {
  const {
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
    loading,
    showData,
    summary,
    test2,
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

  function myFunc() {
    return showData;
  }

  /*   function myFunc2() {
    return test2;
  } */

  function myFunction() {
    return myFunc();
    // return myFunc2();
  }

  return (
    <div className="all-center">
      <h1>{props.title}</h1>
      <br />
      <button className="btn btn-dark" onClick={myFunction()}>
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
        {windSpeedText[9]} {windSpeed}{" "}
      </h3>
      {/*       
      <h3> {windSpeed[8]}</h3> */}

      {/*       <h3>Summary: {summary}</h3>
      <h3>Temperature: {temperature}</h3>
      <h3>Dew Point: {dewPoint}</h3>
      <h3>Ozone: {ozone}</h3>
      <h3>Pressure: {pressure}</h3>
      <h3>Visibility: {visibility}</h3>
      <h3>Wind Bearing: {windBearing}</h3>
      <h3>Wind Gust: {windGust}</h3>
      <h3>Wind Speed: {windSpeed}</h3> */}
      {/* <h3>{text() + summary}</h3> */}
      {/* <h3>{test}</h3> */}
    </div>
  );
};

export default Ui;

/* import React, { Fragment, Component } from "react";
import Data from "../weather-info/Data";

export class Ui extends Component {
  render() {
    return (
      <Fragment>
        <div className="all-center">
          <h1>{this.props.title}</h1>
          <br />
          <button className="btn btn-dark">{this.props.button}</button>
        </div>
      </Fragment>
    );
  }
}

export default Ui; */
