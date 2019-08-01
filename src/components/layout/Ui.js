import React from "react";

const Ui = props => {
  const {
    ButtonDisabled,
    humidityText,
    windSpeedText,
    spinner,
    showData,
    summary,
    temperature,
    windSpeed,
    humidity,
    feelsLike,
    feelsLikeText,
    button,
    showButton,
    clearData,
    summaryHourly,
    icon
  } = props;

  return (
    <div className="all-center">
      <br />
      <button
        className="btn btn-dark"
        onClick={showData}
        disabled={ButtonDisabled}
      >
        {button}
      </button>
      <br />
      {showButton && (
        <button className="btn btn-light" onClick={clearData}>
          Clear
        </button>
      )}
      <br />
      <div>{spinner}</div>
      <h1 className="text-center">
        {icon} {temperature} {summary}
      </h1>
      <div className="grid-3">
        <div className="light-text">
          {feelsLikeText[1]} {feelsLike}
        </div>
        <div className="light-text">
          {windSpeedText[2]} {windSpeed}
        </div>
        <div className="light-text">
          {humidityText[3]} {humidity}
        </div>
      </div>
      <h1 className="lead text-center light-middle-text">{summaryHourly}</h1>

      <a href="https://darksky.net/poweredby/">Powered by Dark Sky</a>
    </div>
  );
};

Ui.defaultProps = {
  button: "Get Current Weather"
};

export default Ui;
