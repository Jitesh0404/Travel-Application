import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import SubAbout from "./AboutChild/SubAbout";
const About = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="./assets/night.jpg"
        title="About"
        btnClass="hide"
      />
      <SubAbout />
      <Footer />
    </>
  )
}
export default About;