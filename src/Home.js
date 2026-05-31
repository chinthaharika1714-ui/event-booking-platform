import React from "react";

import football from "./images/football.jpg";
import drama from "./images/drama.webp";
import music from "./images/music.jpg";

function Home() {
  const bookTicket = (eventName) => {
    alert(`🎉 Ticket Booked Successfully for ${eventName}!`);
  };

  const events = [
    {
      id: 1,
      title: "Football Tournament",
      date: "15 June 2026",
      location: "Hyderabad",
      image: football,
    },
    {
      id: 2,
      title: "Drama Festival",
      date: "20 July 2026",
      location: "Bangalore",
      image: drama,
    },
    {
      id: 3,
      title: "Music Concert",
      date: "10 August 2026",
      location: "Chennai",
      image: music,
    },
  ];

  return (
    <div className="home">
      <h1>Upcoming Events</h1>

      {events.map((event) => (
        <div className="event-card" key={event.id}>
          <img
            src={event.image}
            alt={event.title}
            className="event-image"
          />

          <div className="event-details">
            <h2>{event.title}</h2>

            <p>
              <strong>Date:</strong> {event.date}
            </p>

            <p>
              <strong>Location:</strong> {event.location}
            </p>

            <button
              className="book-btn"
              onClick={() => bookTicket(event.title)}
            >
              Book Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;