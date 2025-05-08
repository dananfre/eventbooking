import "./navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">
      <Link to="/" className="navigation__link">
        Home
      </Link>
      <Link to="/events" className="navigation__link">
        Events
      </Link>
      <Link to="/tickets" className="navigation__link">
        Tickets
      </Link>
    </nav>
  );
}

export default Navigation;
