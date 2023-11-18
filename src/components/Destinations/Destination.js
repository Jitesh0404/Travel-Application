import DestinationHandler from "./DestinationHandler";
import "./DestinationStyle.css";
import {TaalVolcano} from "./DestinationContent";
import { IntramurosManila } from "./DestinationContent";
const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tour gives you the opportunity to see a lot, within a time frame</p>

      <DestinationHandler
        cName="first-des"
        heading={TaalVolcano.name}
        text={TaalVolcano.text}
        img1="./assets/1.jpg"
        img2="./assets/2.jpg"
      />
      <DestinationHandler
        cName="first-des-rev"
        heading={IntramurosManila.name}
        text={IntramurosManila.text}
        img1="./assets/3.jpg"
        img2="./assets/4.jpg"
      />
    </div>
  );
};
export default Destination;
