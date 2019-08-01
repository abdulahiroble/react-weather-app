import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Ui from "./components/layout/Ui";
import Data from "./components/weather-info/Data";
import Spinner from "./components/layout/Spinner";
import Navbar from "./components/layout/Navbar";

const App = () => {
  // State with hooks
  const [weather, setWeather] = useState([]);
  const [weatherHourly, setWeatherHourly] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [message, setMessage] = useState("");

  const showData = async () => {
    setLoading(true);
    const res = await axios.get(
      "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/c5dd4d4949520c4f85675def7c5a3a41/55.676098,12.568337/"
    );

    // Removing the spinner after 2 seconds
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Fetching the data after 2 seconds
    setTimeout(() => {
      setWeather(res.data.currently);
      setWeatherHourly(res.data.hourly);

      setMessage(["Summary: ", "Feels like: ", "Wind Speed: ", "Humidity: "]);
    }, 2000);

    // disabling the button after 2 seconds
    setTimeout(() => {
      setIsButtonDisabled(true);
    }, 2000);
  };

  // Clear button appearing after first button has ben disabled
  const clearData = () => {
    setWeather([]);
    setLoading(false);
    setMessage("");
    setIsButtonDisabled(false);
    setWeatherHourly([]);
  };

  // Destructuring
  const {
    temperature,
    apparentTemperature,
    humidity,
    windSpeed,
    icon,
    summary
  } = weather;

  // Convert to celcius
  const temperatureCelcius = Math.round((temperature - 32) / 1.8);
  const apparentTemperatureCelcius = Math.round(
    (apparentTemperature - 32) / 1.8
  );

  // Choose icon depending on what the weather is
  const chooseIcon = () => {
    if (icon === "cloudy") {
      return <i className="fas fa-cloud" />;
    } else if (icon === "partly-cloudy-day") {
      return <i className="fas fa-cloud-sun" />;
    } else if (icon === "clear-day") {
      return <i className="far fa-sun" />;
    } else if (icon === "clear-night") {
      return <i className="far fa-moon" />;
    } else if (icon === "partly-cloudy-night") {
      return <i className="fas fa-cloud-moon" />;
    } else if (icon === "fog") {
      return <i class="fas fa-smog" />;
    } else if (icon === "wind") {
      return <i class="fas fa-wind" />;
    } else if (icon === "rain") {
      return <i class="fas fa-cloud-rain" />;
    } else {
      return false;
    }
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route
            path="/"
            render={props => (
              <Fragment>
                <Ui
                  spinner={loading && <Spinner />}
                  showButton={message.length > 0 ? true : false}
                  clearData={clearData}
                  ButtonDisabled={isButtonDisabled}
                  feelsLikeText={message}
                  temperatureText={message}
                  humidityText={message}
                  windSpeedText={message}
                  showData={showData}
                  summaryHourly={weatherHourly.summary}
                  summary={summary}
                  temperature={
                    message.length > 0 ? `${temperatureCelcius}°` : false
                  }
                  feelsLike={
                    message.length > 0
                      ? `${apparentTemperatureCelcius}°`
                      : false
                  }
                  humidity={humidity}
                  icon={chooseIcon()}
                  windSpeed={windSpeed}
                />
                <Data />
              </Fragment>
            )}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
