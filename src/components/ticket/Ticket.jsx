import React from "react";
import Barcode from "react-barcode";
import "./ticket.css";

function Ticket({ ticket, index }) {
  const [day, monthFull] = ticket.date.split(" ");
  const monthShort = monthFull.slice(0, 3).toUpperCase();

  return (
    <article className="ticket">
      <div className="ticket__name">
        <p className="ticket__headings">WHAT</p>
        <div className="ticket__boxcontents">
          <h2>{ticket.name}</h2>
        </div>
      </div>

      <div className="ticket__where">
        <p className="ticket__headings">WHERE</p>
        <div className="ticket__boxcontents">
          <p>{ticket.where}</p>
        </div>
      </div>

      <div className="ticket__time">
        <div className="ticket__time-small">
          <p className="ticket__headings">WHEN</p>
          <div className="ticket__boxcontents">
            <p>
              {day} {monthShort}
            </p>
          </div>
        </div>

        <div className="ticket__time-small">
          <p className="ticket__headings">FROM</p>
          <div className="ticket__boxcontents">
            <p>{ticket.from}</p>
          </div>
        </div>

        <div className="ticket__time-small">
          <p className="ticket__headings">TO</p>
          <div className="ticket__boxcontents">
            <p>{ticket.to}</p>
          </div>
        </div>
      </div>

      <div className="ticket__info">
        <p className="ticket__headings">INFO</p>
        <div className="ticket__boxcontents">
          <p>
            section {ticket.section} - seat {ticket.seat}
          </p>
        </div>
      </div>
      <div className="ticket__barcode">
        <div className="ticket__barcode-container">
          <Barcode
            value={ticket.ticketID}
            width={1.5}
            height={60}
            displayValue={true}
            fontSize={14}
          />
        </div>
      </div>
    </article>
  );
}

export default Ticket;
