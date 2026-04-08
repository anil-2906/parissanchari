// App.jsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Packages from "./components/Packages";
import WhyUS from "./components/WhyUS";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      
      {/* Prathi component ki oka div wrap chesi ID ivvandi */}
      <div id="services">
        <Services />
      </div>
      
      <div id="packages">
        <Packages />
      </div>
      
      <div id="whyus">
        <WhyUS />
      </div>

      <div id="contact">
        <Contact />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;