import TripHandler from "./TripHandler";
import { TRIPS_INDONESIA } from "./TripContent";
import { TRIPS_MALAYSIA } from "./TripContent";
import { TRIPS_FRANCE } from "./TripContent";
import "./TripsStyles.css";
const Trips = () => {
  return (
    <div className="t-card">
      <h1>Recent Trips</h1>
      <p>You can discover unique destination using Google Maps</p>
      <div className="handler">
        <TripHandler
          cName = "card"
          img={TRIPS_INDONESIA.image}
          title={TRIPS_INDONESIA.title}
          text={TRIPS_INDONESIA.text}
        />
        <TripHandler
        cName = "card"
          img={TRIPS_MALAYSIA.image}
          title={TRIPS_MALAYSIA.title}
          text={TRIPS_MALAYSIA.text}
        />
        <TripHandler
        cName = "card"
          img={TRIPS_FRANCE.image}
          title={TRIPS_FRANCE.title}
          text={TRIPS_FRANCE.text}
        />
      </div>
    </div>
  );
};
export default Trips;
