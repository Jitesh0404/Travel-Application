import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import Form from "./FormChild/Form";
const Contact = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="./assets/2.jpg"
        title="Contact"
        btnClass="hide"
      />
      <Form />
      <Footer />
    </>
  )
}
export default Contact