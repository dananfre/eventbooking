import "./singleEvent.css";

function SingleEvent({ event, onSelect }) {
  const [day, monthFull] = event.when.date.split(" ");
  const monthShort = monthFull.slice(0, 3).toUpperCase();

  return (
    <article className="event" onClick={() => onSelect(event)}>
      <p className="event__date">
        <span className="event__day">{day}</span>
        <span className="event__month">{monthShort}</span>
      </p>
      <div className="event__details">
        <h2 className="event__act">{event.name}</h2>
        <p className="event__venue">{event.where}</p>
        <p className="event__time">
          {event.when.from} - {event.when.to}
        </p>
        <p className="event__cost">{event.price} sek</p>
      </div>
    </article>
  );
}

export default SingleEvent;
