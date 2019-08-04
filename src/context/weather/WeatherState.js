import React, { useReducer } from "react";
import axios from "axios";
import WeatherContext from "./weatherContext";
import WeatherReducer from "./weatherReducer";

import {
  GET_WEATHER_CURRENTLY,
  GET_WEATHER_HOURLY,
  SET_LOADING,
  SET_DISABLED_BUTTON
} from "../types";

const WeatherState = props => {
  // Our global state for anything that involves Darksky
  const initialState = {
    weather: [],
    weatherHourly: [],
    loading: false,
    isButtonDisabled: false
  };

  const [state, dispatch] = useReducer(WeatherReducer, initialState);

  // Get weather info
  const showData = async () => {
    setLoading();
    const res = await axios.get(
      "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/c5dd4d4949520c4f85675def7c5a3a41/55.676098,12.568337/"
    );

    // Removing the spinner after 2 seconds
    setTimeout(() => {
      setLoading();
    }, 2000);

    // Fetching the data after 2 seconds
    setTimeout(() => {
      dispatch({
        type: GET_WEATHER_CURRENTLY,
        payload: res.data.currently
      });

      dispatch({
        type: GET_WEATHER_HOURLY,
        payload: res.data.hourly
      });
    }, 2000);

    // disabling the button after 2 seconds
    setTimeout(() => {
      dispatch({
        type: SET_DISABLED_BUTTON,
        payload: true
      });
    }, 2000);
  };

  // Clear button which once clicked resets everything
  const clearData = () => {
    dispatch({
      type: GET_WEATHER_CURRENTLY,
      payload: []
    });

    dispatch({
      type: GET_WEATHER_HOURLY,
      payload: []
    });

    dispatch({
      type: SET_LOADING,
      payload: false
    });

    dispatch({
      type: SET_DISABLED_BUTTON,
      payload: false
    });
  };

  // set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <WeatherContext.Provider
      value={{
        weather: state.weather,
        weatherHourly: state.weatherHourly,
        loading: state.loading,
        isButtonDisabled: state.isButtonDisabled,
        showData,
        clearData
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherState;
