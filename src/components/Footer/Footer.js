import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTwitterSquare } from "react-icons/ai";
import "./FooterStyles.css";
import FooterHandler from "./FooterHandler";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="top">
          <div className="top-left">
            <h1>Trippy</h1>
            <p>Choose your favourite destination</p>
          </div>
          <div className="right">
            <BiLogoFacebookSquare />
            <FaInstagramSquare />
            <AiFillTwitterSquare />
          </div>
        </div>
        <div className="bottom">
          <div className="col col1">
            <FooterHandler heading="Project" subHeading1="Changelog" subHeading2="Status" subHeading3="License" subHeading4="All Versions"/>
          </div>
          <div className="col col2">
            <FooterHandler heading="Community" subHeading1="Github" subHeading2="Issues" subHeading3="Projects" subHeading4="Twitter"/>
          </div>
          <div className="col col3">
            <FooterHandler heading="Help" subHeading1="Support" subHeading2="Troubleshooting" subHeading3="Contact Us" />
          </div>
          <div className="col col4">
            <FooterHandler heading="Others" subHeading1="Terms of Service" subHeading2="Privacy Policy" subHeading3="License" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
