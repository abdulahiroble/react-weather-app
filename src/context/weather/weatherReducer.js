import {
  GET_WEATHER_CURRENTLY,
  GET_WEATHER_HOURLY,
  GET_WEATHER_CITY,
  SET_LOADING,
  SET_DISABLED_BUTTON,
  GET_COUNTRY_WEATHER_INFO
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
    case GET_WEATHER_CITY:
      return {
        ...state,
        weatherCity: action.payload,
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
    case GET_COUNTRY_WEATHER_INFO:
      return {
        ...state,
        getCountry: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
