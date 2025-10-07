import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Facilities from "./pages/Facilities";
import PrescriptionServices from "./pages/PrescriptionServices";
import ScreeningServices from "./pages/ScreeningServices";
import VaccinationServices from "./pages/VaccinationServices";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-25">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/prescription" element={<PrescriptionServices />} />
            <Route path="/screening" element={<ScreeningServices />} />
            <Route path="/vaccination" element={<VaccinationServices />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;