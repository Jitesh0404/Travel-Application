import Destination from "../Destinations/Destination";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import Trips from "../Trips/Trips";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="./assets/12.jpg"
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination"
        url="/"
        btnClass="show"
        btnText="Travel Plan"
      />
      <Destination />

      <Trips />

      <Footer />
    </>
  );
};
export default Home;
