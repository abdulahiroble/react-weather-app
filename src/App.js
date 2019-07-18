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
  const [loading, setLoading] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [message, setMessage] = useState("");

  const showData = async () => {
    setLoading(true);
    const res = await axios.get(
      "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/c5dd4d4949520c4f85675def7c5a3a41/55.676098,12.568337"
    );

    // Removing the spinner after 2 seconds
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Fetching the data after 2 seconds
    setTimeout(() => {
      setWeather(res.data.currently);

      setMessage([
        "Summary: ",
        "Temperature: ",
        "Dew Point: ",
        "Humidity: ",
        "Ozone: ",
        "Current Pressure: ",
        "Visibility: ",
        "Wind Bearing",
        "Wind Gust: ",
        "Wind Speed: "
      ]);
    }, 2000);

    // disabling the button after 2 seconds
    setTimeout(() => {
      setIsButtonDisabled(true);
    }, 2000);
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
                  ButtonDisabled={isButtonDisabled}
                  summaryText={message}
                  temperatureText={message}
                  dewPointText={message}
                  humidityText={message}
                  ozoneText={message}
                  currentPressureText={message}
                  visibilityText={message}
                  windBearingText={message}
                  windGustText={message}
                  windSpeedText={message}
                  showData={showData}
                  summary={weather.summary}
                  temperature={weather.apparentTemperature}
                  dewPoint={weather.dewPoint}
                  humidity={weather.humidity}
                  icon={weather.icon}
                  ozone={weather.ozone}
                  pressure={weather.pressure}
                  visibility={weather.visibility}
                  windBearing={weather.windBearing}
                  windGust={weather.windGust}
                  windSpeed={weather.windSpeed}
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
