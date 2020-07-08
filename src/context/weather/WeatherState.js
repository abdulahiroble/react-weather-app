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
  GET_LATITUDE,
  GET_LONGITUDE,
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

  // const getLocation = () => {
  //   const x = document.getElementById("demo");

  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(function (position) {
  //       console.log("Latitude is :", position.coords.latitude);
  //       console.log("Longitude is :", position.coords.longitude);
  //     });
  //   } else {
  //     x.innerHTML = "Geolocation is not supported by this browser.";
  //   }
  // };

  const test = () => {
    console.log("hej");
  };

  // Get weather info
  const showData = async () => {
    // navigator.geolocation.getCurrentPosition((test) =>
    //   console.log(
    //     `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/c5dd4d4949520c4f85675def7c5a3a41/${test.coords.latitude},${test.coords.longitude}/`
    //   )
    // );

    // console.log(
    //   `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/c5dd4d4949520c4f85675def7c5a3a41/${navigator.geolocation.getCurrentPosition(
    //     (test) => test.coords.latitude
    //   )},	${navigator.geolocation.getCurrentPosition(
    //     (test) => test.coords.longitude
    //   )}/`
    // );

    // navigator.geolocation.getCurrentPosition((test) => {
    //   let res = axios.get(
    //     `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/c5dd4d4949520c4f85675def7c5a3a41/${test.coords.latitude},${test.coords.longitude}/`
    //   );

    //   console.log(res);
    // });

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showLatitude);
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showLongitude);
    }

    function showLatitude(test) {
      console.log(test.coords.latitude);
    }

    function showLongitude(test2) {
      console.log(test2.coords.longitude);
    }

    const res = await axios.get(
      //`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/c5dd4d4949520c4f85675def7c5a3a41/${test.coords.latitude},${test.coords.longitude}/`
      `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/c5dd4d4949520c4f85675def7c5a3a41/55.66792712079129,12.578312951862358/`
    );

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

    // navigator.geolocation.getCurrentPosition((test) => {
    //   const res = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/c5dd4d4949520c4f85675def7c5a3a41/${test.coords.latitude},${test.coords.longitude}/`;
    //   // `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/c5dd4d4949520c4f85675def7c5a3a41/55.676098,	12.568337/`
    // });

    // const test2 = await axios.get(test);

    // Fetching the data
    // dispatch({
    //   type: GET_WEATHER_CURRENTLY,
    //   payload: res.data.currently,
    // });

    // dispatch({
    //   type: GET_WEATHER_HOURLY,
    //   payload: res.data.hourly,
    // });

    // dispatch({
    //   type: GET_WEATHER_CITY,
    //   payload: res.data.timezone,
    // });

    // const res = await axios.get(
    //   `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/c5dd4d4949520c4f85675def7c5a3a41/55.67009870966123,12.576573846762678/`
    //   `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/c5dd4d4949520c4f85675def7c5a3a41/${position.coords.latitude},${position.coords.longitude}/`
    // `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/c5dd4d4949520c4f85675def7c5a3a41/${navigator.geolocation.getCurrentPosition(
    //   (pos) => pos.coords.latitude
    // )},${navigator.geolocation.getCurrentPosition(
    //   (pos) => pos.coords.longitude
    // )}/`
    // );
  };

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
        test,
        // getLocation,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherState;
