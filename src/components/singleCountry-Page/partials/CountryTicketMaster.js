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
    }, 4000);
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
    <section className="ticketmaster-events" data-aos="flip-up">
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
            //When more than 3 slides, other slides
            let position = "otherSlide";
            //Slide after the current === "nextSlide"
            if (
              eventIndex === index + 1 ||
              (index === events.length - 1 && eventIndex === 0)
            ) {
              position = "nextSlide";
            }
            /* Current Slide */
            if (eventIndex === index) {
              position = "activeSlide";
            }
            //Slide preceding current slide
            if (
              eventIndex === index - 1 ||
              (index === 0 && eventIndex === events.length - 1)
            ) {
              position = "lastSlide";
            }
            //If only 1 event, make it active
            if (events.length === 1) {
              position = "activeSlide";
            }
            return (
              <article className={position}>
                <a href={url} key={id} target="_blank" rel="noreferrer">
                  <h5>{name}</h5>
                  <div>
                    <img src={images[1].url} alt="" />
                  </div>
                  <p>{localDate}</p>
                  <p>
                    ({eventIndex + 1} / {events.length})
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
