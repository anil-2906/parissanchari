// App.jsx

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Packages from "./components/Packages";
import WhyUS from "./components/WhyUS";
import Testimonials from "./components/Testimonials"; // ✅ NEW
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />

      {/* SERVICES */}
      <div id="services">
        <Services />
      </div>

      {/* PACKAGES */}
      <div id="packages">
        <Packages />
      </div>

      {/* WHY US */}
      <div id="whyus">
        <WhyUS />
      </div>

      {/* TESTIMONIALS / REELS */}
      <div id="testimonials">
        <Testimonials />
      </div>

      {/* CONTACT */}
      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default App;