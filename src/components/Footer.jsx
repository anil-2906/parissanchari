import "../styles/footer.css";
import logo from "../assets/logo.png"; 
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* LEFT SECTION: BRANDING */}
        <div className="footer-section brand-info">
          <div className="footer-logo-container">
            <img src={logo} alt="Paris Sanchari Logo" className="footer-logo-img" />
          </div>
          <p className="brand-desc">
            Your trusted Telugu-speaking travel guide in Paris. Making European 
            dreams come true with personalized support and local expertise.
          </p>
        </div>

        {/* MIDDLE SECTION: QUICK LINKS */}
        <div className="footer-section footer-links">
          <h3 className="section-title">QUICK LINKS</h3>
          <ul className="link-list">
            <li><button onClick={() => scrollToSection('services')}>Services</button></li>
            <li><button onClick={() => scrollToSection('packages')}>Packages</button></li>
            <li><button onClick={() => scrollToSection('whyus')}>Why Us</button></li>
            <li><button onClick={() => scrollToSection('contact')}>Plan Your Trip</button></li>
          </ul>
        </div>

        {/* RIGHT SECTION: CONTACT US */}
        <div className="footer-section footer-contact">
          <h3 className="section-title">CONTACT US</h3>
          <div className="contact-social-icons">
            <a 
              href="https://www.instagram.com/paris_sanchari?igsh=c2ZwcGl0a2RveW1m" 
              target="_blank" 
              rel="noreferrer" 
              className="social-icon-link"
              title="Instagram"
            >
              <FaInstagram />
            </a>

            <a 
              href="https://wa.me/919866883843" 
              target="_blank" 
              rel="noreferrer" 
              className="social-icon-link"
              title="WhatsApp"
            >
              <FaWhatsapp />
            </a>

            <a 
              href="mailto:parissanchari@gmail.com" 
              className="social-icon-link"
              title="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Paris Sanchari. All rights reserved.</p>
        <p className="credit">Designed for the Indian Traveler in Paris</p>
      </div>
    </footer>
  );
}