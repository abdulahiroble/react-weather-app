import React, { Component } from "react";
import "./App.css";
/* import Weather from "./components/weather-info/Weather"; */
import axios from "axios";
import Ui from "./components/layout/Ui";
import Data from "./components/weather-info/Data";

class App extends Component {
  state = {
    weather: []
  };
  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(
      "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/c5dd4d4949520c4f85675def7c5a3a41/55.676098,12.568337"
    );

    // Reset state
    this.setState({ weather: res.data.currently });

    // console.log(res.data);
  }
  render() {
    return (
      <div className="App">
        <Ui title="Weather App" button="Get Current Weather" />
        {/* <Weather weather={this.state.weather} loading={this.state.loading} /> */}
        <Data
          summary={this.state.weather.summary}
          temperature={this.state.weather.apparentTemperature}
          dewpoint={this.state.weather.dewPoint}
          humidity={this.state.weather.humidity}
          ozone={this.state.weather.ozone}
          pressure={this.state.weather.pressure}
          visibility={this.state.weather.visibility}
          wind-bearing={this.state.weather.windBearing}
          wind-gust={this.state.weather.windGust}
          wind-speed={this.state.weather.windSpeed}
        />
      </div>
    );
  }
}

export default App;
