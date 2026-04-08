import "../styles/hero.css";
import { useState } from "react"; // State vadadaniki import
import eiffelImage from "../assets/background1.png";
import ContactForm from "../components/contactform"; // Form ni import cheyandi

export default function Hero() {
  const [showForm, setShowForm] = useState(false); // Form modal state

  return (
    <section className="hero" style={{ backgroundImage: `url(${eiffelImage})` }}>
      <div className="hero-overlay"></div>

      <div className="hero-container">
        <div className="hero-content">
          
          <div className="hero-badge">
            ⭐ Telugu-Speaking Travel Guide in Paris
          </div>

          <p className="hero-subtitle">EXPLORE WITH US</p>

          <h1 className="hero-title">
            <span className="light">Experience Paris</span>
            <span className="bold">Like Never Before</span>
          </h1>

          <p className="hero-description">
            Your trusted Telugu travel guide for Paris & Europe. We provide 
            Visa assistance, airport pickup, and personalized city tours.
          </p>

          <div className="hero-btns">
            {/* WhatsApp link badulu ippudu mana Form open avthundi */}
            <button className="btn-fill" onClick={() => setShowForm(true)}>
              Book Your Trip →
            </button>

            <button 
              className="btn-outline"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            >
              Our Services
            </button>
          </div>

        </div>
      </div>

      {/* Form modal ikkada trigger avthundi */}
      {showForm && <ContactForm closeForm={() => setShowForm(false)} />}
    </section>
  );
}