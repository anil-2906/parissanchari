import "../styles/navbar.css";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import ContactForm from "../components/contactform"; // Form component ni import cheyandi

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showForm, setShowForm] = useState(false); // Form modal state

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      if (window.scrollY < 100) {
        setActive("home");
        return;
      }
      const sections = ["services", "packages", "whyus", "contact"];
      const scrollPosition = window.scrollY + 150;
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActive(sectionId);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActive("home");
    setIsOpen(false);
  };

  const handleLinkClick = (e, target) => {
    e.preventDefault();
    setIsOpen(false);
    if (target === "home") {
      scrollToTop();
    } else {
      const element = document.getElementById(target);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
  };

  // Form open chese function
  const openBookingForm = (e) => {
    e.preventDefault();
    setShowForm(true);
    setIsOpen(false); // Mobile menu open unte close chesthundhi
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          
          <div className="logo-box" onClick={scrollToTop}>
            <img src={logo} alt="Paris Sanchari" className="logo-img" />
          </div>

          <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className={`nav-menu ${isOpen ? "nav-active" : ""}`}>
            <a href="#home" className={active === "home" ? "active" : ""} onClick={(e) => handleLinkClick(e, "home")}>Home</a>
            <a href="#services" className={active === "services" ? "active" : ""} onClick={(e) => handleLinkClick(e, "services")}>Services</a>
            <a href="#packages" className={active === "packages" ? "active" : ""} onClick={(e) => handleLinkClick(e, "packages")}>Packages</a>
            <a href="#whyus" className={active === "whyus" ? "active" : ""} onClick={(e) => handleLinkClick(e, "whyus")}>Why Us</a>
            <a href="#contact" className={active === "contact" ? "active" : ""} onClick={(e) => handleLinkClick(e, "contact")}>Contact</a>
            
            {/* Mobile Book Now - WhatsApp badulu Form open chesthundhi */}
            <button onClick={openBookingForm} className="header-btn mobile-nav-btn">
              Book Now
            </button>
          </div>

          {/* Desktop Book Now */}
          <div className="nav-btn-box desktop-only">
            <button onClick={openBookingForm} className="header-btn">
              Book Now
            </button>
          </div>
        </div>
      </nav>

      {/* Show Form Modal if state is true */}
      {showForm && <ContactForm closeForm={() => setShowForm(false)} />}
    </>
  );
}