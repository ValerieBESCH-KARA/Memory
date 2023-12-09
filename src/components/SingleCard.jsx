import "./SingleCard.css";
import PropTypes from "prop-types";

const SingleCard = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />
        <img
          className="back"
          src="/cover.webp"
          onClick={handleClick}
          alt="card back"
        />
      </div>
    </div>
  );
};

SingleCard.propTypes = {
  card: PropTypes.string,
  handleChoice: PropTypes.string,
  flipped: PropTypes.string,
  disabled: PropTypes.string,
};

export default SingleCard;
