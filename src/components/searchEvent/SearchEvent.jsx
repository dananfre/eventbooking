import "./searchEvent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchEvent({ searchTerm, onSearch }) {
  return (
    <div className="search-event">
      <FontAwesomeIcon icon={faSearch} className="search-event__icon" />
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        className="search-event__input"
        aria-label="Sök efter event"
      />
    </div>
  );
}

export default SearchEvent;