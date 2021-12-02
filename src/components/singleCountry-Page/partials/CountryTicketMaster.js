import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "../../../assets";

const CountryTicketMaster = ({ events, isLoading, countryName }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!events) return;
    const lastIndex = events.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, events]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => clearInterval(slider);
  }, [index]);

  if (isLoading) return <h2 className="response">Loading events...</h2>;
  if (!events)
    return (
      <h2 className="response">
        No events found in {countryName}, check again later...
      </h2>
    );

  return (
    <section className="ticketmaster-events">
      <h2>Ticket Master Events in {countryName}</h2>
      <div className="slider-container">
        {events.length &&
          events.map((event, eventIndex) => {
            const {
              url,
              id,
              name,
              dates: {
                start: { localDate },
              },
              images,
            } = event;
            let position = "nextSlide";
            if (eventIndex === index) {
              position = "activeSlide";
            }
            if (
              eventIndex === index - 1 ||
              (index === 0 && eventIndex === event.length - 1)
            ) {
              position = "lastSlide";
            }
            return (
              <article className={position}>
                <a href={url} key={id} target="_blank" rel="noreferrer">
                  <h5>{name}</h5>
                  <div>
                    <img src={images[0].url} alt="" />
                  </div>
                  <p>{localDate}</p>
                  <p>
                    ({index + 1} / {events.length})
                  </p>
                </a>
              </article>
            );
          })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FaChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default CountryTicketMaster;
