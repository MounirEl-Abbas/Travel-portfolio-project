import React from "react";

const CountryTicketMaster = ({ events, isLoading }) => {
  console.log(`isLoading`, isLoading);
  console.log(`events`, events);
  if (isLoading) return <h2>Loading events...</h2>;
  if (!events) return <h2>No events found, check again later...</h2>;

  return (
    <section className="ticketmaster-events">
      {events.length &&
        events.map(
          ({
            url,
            id,
            name,
            dates: {
              start: { localDate },
            },
            images,
          }) => {
            return (
              <a href={url} key={id} target="_blank" rel="noreferrer">
                <h5>{name}</h5>
                <p>{localDate}</p>
                <img src={images[0].url} alt="" />
              </a>
            );
          }
        )}
    </section>
  );
};

export default CountryTicketMaster;
