import "./eventDetailed.css";

function EventDetailed({ event, quantity, setQuantity }) {
  return (
    <section className="eventinfo">
      <p className="eventinfo__tag">You are about to score some tickets to</p>
      <div className="eventinfo__details">
        <h2 className="eventinfo__act">{event.name}</h2>
        <p className="eventinfo__when">
          {event.when.date} kl {event.when.from} - {event.when.to}
        </p>
        <p className="eventinfo__where">@ {event.where}</p>
      </div>
      <div className="eventinfo__tickets">
        <p className="eventinfo__cost">{event.price * quantity} sek</p>
        <div className="eventinfo__amount">
          <p
            className="eventinfo__decrement"
            onClick={() => setQuantity(Math.max(0, quantity - 1))}
          >
            -
          </p>
          <p className="eventinfo__number">{quantity}</p>
          <p
            className="eventinfo__increment"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </p>
        </div>
      </div>
    </section>
  );
}

export default EventDetailed;