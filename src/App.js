import React, { Component } from "react";
import "./App.css";
/* import Weather from "./components/weather-info/Weather"; */
import axios from "axios";
import Ui from "./components/layout/Ui";
import Data from "./components/weather-info/Data";
import Spinner from "./components/layout/Spinner";

class App extends Component {
  state = {
    weather: [],
    loading: false,
    button: true,
    message: ""
  };

  showData = async () => {
    this.setState({ loading: true });
    const res = await axios.get(
      "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/c5dd4d4949520c4f85675def7c5a3a41/55.676098,12.568337"
    );

    // Faking API Call Response here
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
      //this.setState({ message: "Temperature: " });
    }, 2000);

    /*     setTimeout(() => {
      this.setState({ weather: "Summary: " });
    }, 2000); */
  };

  /*   messages = () => {
    setTimeout(() => {
      this.setState({ message: "Summary: " });
    }, 2000);
  };
 */
  /*   fetchData = () => {
    this.setState({ loading: true });

    // Faking API Call here
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);
  }; */

  render() {
    // Destructuring
    const { weather, loading, message } = this.state;
    return (
      <div className="App">
        {/*         <button onClick={this.showData}>Show Data</button>
        <div>{this.state.weather.summary}</div> */}

        {/*         <button onClick={this.messages}>Show Data</button>
        <div>{this.state.message}</div> */}

        {/*         <button onClick={this.fetchData}> Click Here</button>
        <br />
        {loading && <Spinner />} */}

        {/*         <button onClick={this.fetchData} disabled={loading}>
          {loading && <Spinner />}
          {loading && <span>Loading from server</span>}
          {loading && <span>Fetch Data from server</span>}
        </button> */}

        <Ui
          title="Weather App"
          button="Get Current Weather"
          loading={this.fetchData}
          spinner={loading && <Spinner />}
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
          ozone={weather.ozone}
          pressure={weather.pressure}
          visibility={weather.visibility}
          windBearing={weather.windBearing}
          windGust={weather.windGust}
          windSpeed={weather.windSpeed}
        />
        <Data
        /*           summary={this.state.weather.summary}
          temperature={this.state.weather.apparentTemperature}
          dewpoint={this.state.weather.dewPoint}
          humidity={this.state.weather.humidity}
          ozone={this.state.weather.ozone}
          pressure={this.state.weather.pressure}
          visibility={this.state.weather.visibility}
          wind-bearing={this.state.weather.windBearing}
          wind-gust={this.state.weather.windGust}
          wind-speed={this.state.weather.windSpeed} */
        />
      </div>
    );
  }
}

export default App;
