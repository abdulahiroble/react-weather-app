import {
  GET_WEATHER_CURRENTLY,
  GET_WEATHER_HOURLY,
  SET_LOADING,
  SET_DISABLED_BUTTON
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_WEATHER_CURRENTLY:
      return {
        ...state,
        weather: action.payload,
        loading: false
      };
    case GET_WEATHER_HOURLY:
      return {
        ...state,
        weatherHourly: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case SET_DISABLED_BUTTON:
      return {
        ...state,
        isButtonDisabled: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
