import React, { useReducer, Fragment } from "react";
import axios from "axios";
import WeatherContext from "./weatherContext";
import WeatherReducer from "./weatherReducer";
import { Query } from "react-apollo";
import CountryCode from "../../countrycode-latlong-array";
import gql from "graphql-tag";

import {
  GET_WEATHER_CURRENTLY,
  GET_WEATHER_HOURLY,
  GET_WEATHER_CITY,
  SET_LOADING,
  SET_DISABLED_BUTTON,
  GET_COUNTRY_WEATHER_INFO,
} from "../types";

const GET_COUNTRY = gql`
  {
    country(code: "BR") {
      name
      code
    }
  }
`;

const WeatherState = (props) => {
  // Our global state for anything that involves Darksky
  const initialState = {
    weather: [],
    weatherHourly: [],
    loading: false,
    isButtonDisabled: false,
    getCountry: "",
  };

  const [state, dispatch] = useReducer(WeatherReducer, initialState);

  // Get weather info
  const showData = async () => {
    const res = await axios.get(
      "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/c5dd4d4949520c4f85675def7c5a3a41/55.676098,12.568337/"
    );

    // console.log(res);

    // Fetching the data
    dispatch({
      type: GET_WEATHER_CURRENTLY,
      payload: res.data.currently,
    });

    dispatch({
      type: GET_WEATHER_HOURLY,
      payload: res.data.hourly,
    });

    dispatch({
      type: GET_WEATHER_CITY,
      payload: res.data.timezone,
    });
  };

  // const getLocation = () => {
  //   const x = document.getElementById("demo");

  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(showPosition);
  //   } else {
  //     x.innerHTML = "Geolocation is not supported by this browser.";
  //   }

  //   function showPosition(position) {
  //     return (
  //       "Latitude: " +
  //       position.coords.latitude +
  //       " " +
  //       "Longitude: " +
  //       position.coords.longitude
  //     );
  //   }
  // };

  const changeLocation = async () => {
    setLoading();

    const response = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/c5dd4d4949520c4f85675def7c5a3a41/24.0000, 54.0000`
    );

    console.log(response);

    // Removing the spinner after 2 seconds
    setTimeout(() => {
      setLoading();
    }, 2000);

    // Fetching the data after 2 seconds
    setTimeout(() => {
      dispatch({
        type: GET_WEATHER_CURRENTLY,
        payload: response.data.currently,
      });

      dispatch({
        type: GET_WEATHER_HOURLY,
        payload: response.data.hourly,
      });

      dispatch({
        type: GET_WEATHER_CITY,
        payload: response.data.timezone,
      });
    }, 2000);
  };

  // Clear button which once clicked resets everything
  const clearData = () => {
    dispatch({
      type: GET_WEATHER_CURRENTLY,
      payload: [],
    });

    dispatch({
      type: GET_WEATHER_HOURLY,
      payload: [],
    });

    dispatch({
      type: GET_WEATHER_CITY,
      payload: [],
    });

    dispatch({
      type: SET_LOADING,
      payload: false,
    });

    dispatch({
      type: SET_DISABLED_BUTTON,
      payload: false,
    });
  };

  // set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <WeatherContext.Provider
      value={{
        weather: state.weather,
        weatherHourly: state.weatherHourly,
        weatherCity: state.weatherCity,
        loading: state.loading,
        isButtonDisabled: state.isButtonDisabled,
        getCountry: state.getCountry,
        showData,
        clearData,
        changeLocation,
        // getLocation,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherState;
