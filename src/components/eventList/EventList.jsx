import { useState, useEffect } from "react";
import axios from "axios";
import SingleEvent from "../singleEvent/SingleEvent";
import SearchEvent from "../searchEvent/SearchEvent";
import "./eventList.css";

function EventList({ onSelect }) {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await axios.get(
          "https://santosnr6.github.io/Data/events.json"
        );
        setEvents(response.data.events);
        setLoading(false);
      } catch (error) {
        console.error("Fel vid hämtning av events:", error);
        setError(true);
        setLoading(false);
      }
    }
    fetchEvents();
  }, []);

  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <p className="events__loading">Loading events...</p>;
  }

  if (error) {
    return (
      <div className="events__error">
            <img src="/src/assets/logo_sad.svg" alt="sad" />
            <p>Fel vid API-anrop</p>
      </div>
    );
  }

  return (
    <>
      <SearchEvent searchTerm={searchTerm} onSearch={setSearchTerm} />
      <section className="events__list">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <SingleEvent key={event.id} event={event} onSelect={onSelect} />
          ))
        ) : (
          <div className="events__no-results">
            <img src="./src/assets/logo_sad.svg" alt="Inga resultat" />
            <p>Inget sökresultat</p>
          </div>
        )}
      </section>
    </>
  );
}

export default EventList;
