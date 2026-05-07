import "../styles/navbar.css";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import ContactForm from "../components/contactform";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      if (window.scrollY < 100) {
        setActive("home");
        return;
      }

      const sections = [
        "services",
        "packages",
        "whyus",
        "contact",
        "reviews",
      ];

      const scrollPosition = window.scrollY + 150;

      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);

        if (element) {
          if (
            scrollPosition >= element.offsetTop &&
            scrollPosition < element.offsetTop + element.offsetHeight
          ) {
            setActive(sectionId);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e, target) => {
    e.preventDefault();
    setIsOpen(false);

    const element = document.getElementById(target);

    if (target === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  const openBookingForm = (e) => {
    e.preventDefault();
    setShowForm(true);
    setIsOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container">

          {/* LOGO */}
          <div
            className="logo-box"
            onClick={(e) => handleLinkClick(e, "home")}
          >
            <img
              src={logo}
              alt="Paris Sanchari"
              className="logo-img"
            />
          </div>

          {/* HAMBURGER */}
          <div
            className={`hamburger ${isOpen ? "open" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* MENU */}
          <div className={`nav-menu ${isOpen ? "nav-active" : ""}`}>

            <a
              href="#home"
              className={active === "home" ? "active" : ""}
              onClick={(e) => handleLinkClick(e, "home")}
            >
              Home
            </a>

            <a
              href="#services"
              className={active === "services" ? "active" : ""}
              onClick={(e) => handleLinkClick(e, "services")}
            >
              Services
            </a>

            <a
              href="#packages"
              className={active === "packages" ? "active" : ""}
              onClick={(e) => handleLinkClick(e, "packages")}
            >
              Packages
            </a>

            <a
              href="#whyus"
              className={active === "whyus" ? "active" : ""}
              onClick={(e) => handleLinkClick(e, "whyus")}
            >
              Why Us
            </a>

            <a
              href="#contact"
              className={active === "contact" ? "active" : ""}
              onClick={(e) => handleLinkClick(e, "contact")}
            >
              Contact
            </a>

            {/* NEW REVIEWS MENU */}
            <a
              href="#reviews"
              className={active === "reviews" ? "active" : ""}
              onClick={(e) => handleLinkClick(e, "reviews")}
            >
              Reviews
            </a>

            {/* Mobile Button */}
            <button
              onClick={openBookingForm}
              className="header-btn mobile-nav-btn"
            >
              Book Now
            </button>
          </div>

          {/* Desktop Button */}
          <button
            onClick={openBookingForm}
            className="header-btn desktop-only"
          >
            Book Now
          </button>

        </div>
      </nav>

      {showForm && (
        <ContactForm closeForm={() => setShowForm(false)} />
      )}
    </>
  );
}