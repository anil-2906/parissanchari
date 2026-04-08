import "../styles/footer.css";
// Nee logo path ni ikkada import chey
import logo from "../assets/logo.png"; 

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
          {/* Text badulu ikkada Image Logo pettali */}
          <div className="footer-logo-container">
            <img src={logo} alt="Paris Sanchari Logo" className="footer-logo-img" />
          </div>
          <p className="brand-desc">
            Your trusted Telugu-speaking travel guide in Paris. Making European 
            dreams come true since 2019 with personalized support and local expertise.
          </p>
          <div className="footer-socials">
            {/* Buttons la kakunda real icons use chesthe inka professional ga untundi */}
            <a href="https://instagram.com/your-id" target="_blank" className="social-button">Instagram</a>
            <a href="https://wa.me/919866883843" target="_blank" className="social-button">WhatsApp</a>
          </div>
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

        {/* RIGHT SECTION: CONTACT */}
        <div className="footer-section footer-contact">
          <h3 className="section-title">CONTACT US</h3>
          <div className="contact-info">
            <div className="contact-item">
              <span className="icon-label">PHONE:</span>
              <a href="tel:+919866883843">+91 98668 83843</a>
            </div>
            <div className="contact-item">
              <span className="icon-label">EMAIL:</span>
              <a href="mailto:parissanchari@gmail.com">parissanchari@gmail.com</a>
            </div>
            <div className="contact-item">
              <span className="icon-label">LOCATION:</span>
              <p>Nalgonda, Telangana / Paris, France</p>
            </div>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Paris Sanchari. All rights reserved.</p>
      </div>
    </footer>
  );
}