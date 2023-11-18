import "./TripsStyles.css";
const TripHandler = ({ cName, img, title, text }) => {
  return (
    <div className={`t-container ${cName}`}>
      <img src={img} alt={title} />
      <div className="t-text">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};
export default TripHandler;
