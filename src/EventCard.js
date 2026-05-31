import music from "./images/music.jpg";
import football from "./images/football.jpg";
import drama from "./images/drama.webp";

function EventCard() {
  const handleBooking = (eventName) => {
    alert(`You have booked a ticket for ${eventName}!`);
  };

  return (
    <div>
      <div className="card">
        <img src={music} alt="Music Concert" className="event-image" />
        <h3>🎵 Music Concert</h3>
        <p>Date: 15 June 2026</p>
        <button onClick={() => handleBooking("Music Concert")}>
          Book Now
        </button>
      </div>

      <div className="card">
        <img src={football} alt="Football Match" className="event-image" />
        <h3>⚽ Football Match</h3>
        <p>Date: 20 June 2026</p>
        <button onClick={() => handleBooking("Football Match")}>
          Book Now
        </button>
      </div>

      <div className="card">
        <img src={drama} alt="Drama Show" className="event-image" />
        <h3>🎭 Drama Show</h3>
        <p>Date: 25 June 2026</p>
        <button onClick={() => handleBooking("Drama Show")}>
          Book Now
        </button>
      </div>
    </div>
  );
}

export default EventCard;