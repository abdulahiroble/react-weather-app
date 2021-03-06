import React, { useContext, useEffect } from "react";
import WeatherContext from "../../context/weather/weatherContext";
import Spinner from "./Spinner";

const Ui = () => {
  useEffect(() => {
    weatherContext.showData();
    weatherContext.test();
  }, []);

  // Initalize weatherContext
  const weatherContext = useContext(WeatherContext);

  // Destructuring
  const {
    summary,
    temperature,
    windSpeed,
    humidity,
    icon,
    apparentTemperature,
  } = weatherContext.weather;

  // Convert to celcius
  const temperatureCelcius = Math.round((temperature - 32) / 1.8);
  const apparentTemperatureCelcius = Math.round(
    (apparentTemperature - 32) / 1.8
  );
  const windSpeedText = Math.round(windSpeed);
  const humidityText = Math.round(humidity * 100);

  const summarytext = { summary };

  // Choose icon depending on what the weather is like
  const chooseIcon = () => {
    if (icon === "cloudy") {
      return <i className="fas fa-cloud" style={{ color: "grey" }} />;
    } else if (icon === "partly-cloudy-day") {
      return <i className="fas fa-cloud-sun" style={{ color: "grey" }} />;
    } else if (icon === "clear-day") {
      return <i className="far fa-sun" style={{ color: "#FDF100" }} />;
    } else if (icon === "clear-night") {
      return <i className="far fa-moon" style={{ color: "#FEB614" }} />;
    } else if (icon === "partly-cloudy-night") {
      return <i className="fas fa-cloud-moon" style={{ color: "#4973ff" }} />;
    } else if (icon === "fog") {
      return <i className="fas fa-smog" style={{ color: "#606060" }} />;
    } else if (icon === "wind") {
      return <i className="fas fa-wind" style={{ color: "#787878" }} />;
    } else if (icon === "rain") {
      return <i className="fas fa-cloud-rain" style={{ color: "#57bcff" }} />;
    } else {
      return false;
    }
  };

  return (
    <div className="center-align">
      {/*       
      {temperatureCelcius ? (
        <button className="btn red" onClick={weatherContext.clearData}>
          Clear
        </button>
      ) : (
        false
      )} */}

      <br />
      <div>{weatherContext.loading ? <Spinner /> : false}</div>
      <h4 className="flex">
        {weatherContext.weatherCity ? weatherContext.weatherCity : false}
      </h4>
      <div className="weather">
        <h4>{icon ? chooseIcon() : false}</h4>
        <h4 className="space">
          {temperature ? `${temperatureCelcius}°` : false}
        </h4>
        <h4>{summary ? `${summarytext.summary}` : false}</h4>
      </div>
      <div className="flex2">
        <div>
          {apparentTemperature
            ? `Feels like: ${apparentTemperatureCelcius}°`
            : false}
        </div>

        <div>{windSpeed ? `Wind Speed: ${windSpeedText} m/s` : false}</div>
        <div>{humidity ? `Humidity: ${humidityText} %` : false}</div>
      </div>
      <h3 className="hourly">{weatherContext.weatherHourly.summary}</h3>

      {/* <h3>{weatherContext.changeLocation}</h3> */}
      <a href="https://darksky.net/poweredby/" style={{ color: "red" }}>
        Powered by Dark Sky
      </a>
    </div>
  );
};

export default Ui;
