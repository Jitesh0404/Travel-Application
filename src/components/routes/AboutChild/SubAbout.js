import './SubAboutStyles.css';
import { HISTORY } from "./SubAboutContent";
import { MISSION } from "./SubAboutContent";
import { VISION } from "./SubAboutContent";
import SubAboutHandler from "./SubAboutHandler";
const SubAbout = () => {
  return (
    <div className="about-container">
      <div className="sub-container">
        <SubAboutHandler heading={HISTORY.heading} text={HISTORY.text}/>
        <SubAboutHandler heading={MISSION.heading} text={MISSION.text}/>
        <SubAboutHandler heading={VISION.heading} text={VISION.text}/>
      </div>
    </div>
  );
};
export default SubAbout;
