import "./DisplaySearchResults.css";
import PropTypes from "prop-types";
import Card from "../Card/Card";

export default function DisplaySearchResults({
  results,
  inputValue,
  setDisplay,
}) {
  const disappear = () => {
    setDisplay(false);
  };

  const handleClose = () => {
    setDisplay(false);
  };

  return (
    <div id="DisplaySearchResults">
      <button className="close-Btn" type="button" onClick={disappear}>
        X
      </button>

      {!results ? (
        <p> sorry no result for {inputValue}</p>
      ) : (
        <div className="card-list">
          {results.map(
            (card) =>
              card.poster_path && (
                <div
                  className="each-card"
                  key={card.id}
                  onClick={handleClose}
                  role="presentation"
                >
                  <Card card={card} />
                </div>
              )
          )}
        </div>
      )}
    </div>
  );
}
DisplaySearchResults.propTypes = {
  results: PropTypes.oneOfType([PropTypes.array.isRequired]).isRequired,
  inputValue: PropTypes.string.isRequired,
  setDisplay: PropTypes.func.isRequired,
};
