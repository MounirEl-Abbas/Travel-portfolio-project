import React from "react";

const CityWeather = ({ api, apiActions, dispatch }) => {
  if (api.isForecast) {
    return (
      <>
        {api.forecastWeather.map((day) => {
          const {
            condition: { text, icon },
            date,
            avgtemp_c,
            avgtemp_f,
          } = day;

          return (
            <section>
              <h5>{text}</h5>
              <img src={icon} alt="" />
              <p>
                <span>{avgtemp_c}C / </span>
                <span>{avgtemp_f}F</span>
              </p>
              <p>{date}</p>
              <button onClick={() => dispatch(apiActions.toggleForecastView())}>
                Default View
              </button>
            </section>
          );
        })}
      </>
    );
  } else {
    const { condition, localtime, temp_c, temp_f } = api.currentWeather;
    return (
      <section>
        <h5>{condition.text}</h5>
        <img src={condition.icon} alt="" />
        <p>
          <span>{temp_c}C / </span>
          <span>{temp_f}F</span>
        </p>
        <p>Local Time: {localtime}</p>
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
