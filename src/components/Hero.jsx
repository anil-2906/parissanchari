import "../styles/hero.css";
import eiffelImage from "../assets/background1.png";

export default function Hero() {
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
            <a href="https://wa.me/919866883843" target="_blank" className="btn-fill">
              Book Your Trip →
            </a>

            <button 
              className="btn-outline"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            >
              Our Services
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}