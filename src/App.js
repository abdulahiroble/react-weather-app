import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Ui from "./components/layout/Ui";
import Data from "./components/weather-info/Data";
import Spinner from "./components/layout/Spinner";

class App extends Component {
  state = {
    weather: [],
    loading: false,
    isButtonDisabled: false,
    message: ""
  };

  showData = async () => {
    this.setState({ loading: true });
    const res = await axios.get(
      "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/c5dd4d4949520c4f85675def7c5a3a41/55.676098,12.568337"
    );

    // Removing the spinner after 2 seconds
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);

    // Fetching the data after 2 seconds
    setTimeout(() => {
      this.setState({ weather: res.data.currently });
      this.setState({
        message: [
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
        ]
      });
    }, 2000);

    // disabling the button after 2 seconds
    setTimeout(() => {
      this.setState({ isButtonDisabled: true });
    }, 2000);
  };

  render() {
    // Destructuring
    const { weather, loading, message, isButtonDisabled } = this.state;
    return (
      <div className="App">
        <Ui
          title="Weather App"
          button="Get Current Weather"
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
          showData={this.showData}
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
      </div>
    );
  }
}

export default App;
