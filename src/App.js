import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/routes/Home";
import About from "./components/routes/About";
import Services from "./components/routes/Services";
import Contact from "./components/routes/Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
