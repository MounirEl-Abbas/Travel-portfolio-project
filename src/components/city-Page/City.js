import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { singleCountryActions } from "../../redux";

const City = () => {
  const location = useLocation();
  const singleCountry = useSelector((state) => state.singleCountry);
  const dispatch = useDispatch();

  /* If user navigates manually by URL */
  useEffect(() => {
    if (Object.keys(singleCountry.currentCityObj).length) return;

    let citySelected = location.pathname.split("/")[3];
    /* If the country name has a space E.G. New York */
    if (citySelected.indexOf("%") !== -1) {
      citySelected = citySelected.split("%20").join(" ");
    }

    dispatch(singleCountryActions.getCurrentCityInfo(citySelected));
    // singleCountry.currentCityObj = singleCountry.currentCityObj[0];
  }, []);
  console.log(`singleCountry.currentCityObj`, singleCountry.currentCityObj);
  return (
    <>
      {singleCountry.loading ? (
        <h2>Loading......</h2>
      ) : (
        <main className="city-info">
          <section className="city-info">
            <article>
              <h1>{singleCountry.currentCityObj.cityName}</h1>
              <p>{singleCountry.currentCityObj.description}</p>
            </article>
            <article>
              {singleCountry.currentCityObj.images.map((img) => (
                <img src={img} alt="" />
              ))}
            </article>
          </section>
        </main>
      )}
    </>
  );
};

export default City;

/*
Header
City Info
  >Img Slider | City Name, Pop., Desc
Weather / Flights / Hotel / Map

*/
