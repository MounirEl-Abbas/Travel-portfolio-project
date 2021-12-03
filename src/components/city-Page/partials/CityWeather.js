import React from "react";

const CityWeather = ({ api, apiActions, dispatch }) => {
  if (api.isForecast) {
    return (
      <section className="weather-container forecast-view">
        <div>
          {api.forecastWeather.map((day) => {
            const {
              condition: { text, icon },
              date,
              avgtemp_c,
              avgtemp_f,
            } = day;

            return (
              <article>
                <h5>{text}</h5>
                <img src={icon} alt="" />
                <p>
                  {avgtemp_c}&deg;C / {avgtemp_f}&deg;F
                </p>
                <p id="weather-date">
                  <span>Date:</span>
                  {date}
                </p>
              </article>
            );
          })}
        </div>
        <button onClick={() => dispatch(apiActions.toggleForecastView())}>
          Default View
        </button>
      </section>
    );
  } else {
    const { condition, localtime, temp_c, temp_f } = api.currentWeather;
    return (
      <section className="weather-container default-view">
        <article>
          <h5>{condition.text}</h5>
          <img src={condition.icon} alt="" />
          <p>
            {temp_c}&deg;C / {temp_f}&deg;F
          </p>
          <p id="local-time">
            <span>Local Time:</span> {localtime}
          </p>
        </article>
        <button onClick={() => dispatch(apiActions.toggleForecastView())}>
          Forecast View
        </button>
      </section>
    );
  }

  //   return (
  //     <section
  //       className={`${
  //         api.isForecast
  //           ? "weather-container forecast-view"
  //           : "weather-container default-view"
  //       }`}
  //     >
  //       <button onClick={() => dispatch(apiActions.toggleForecastView())}>
  //         {api.isForecast ? "Default View" : "Forecast View"}
  //       </button>
  //     </section>
  //   );
};

export default CityWeather;
