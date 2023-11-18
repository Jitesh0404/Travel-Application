import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import Trips from "../Trips/Trips";
const Services = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="./assets/4.jpg"
        title="Service"
        btnClass="hide"
      />
      <Trips />
      <Footer />
    </>
  )
}
export default Services