import "../styles/navbar.css";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Home check: Top లో ఉన్నప్పుడు 'home' active లో ఉంటుంది
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
  };

  const handleLinkClick = (e, target) => {
    e.preventDefault();
    if (target === "home") {
      scrollToTop();
    } else {
      const element = document.getElementById(target);
      if (element) {
        const offset = 80; // Navbar height
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        
        {/* LOGO */}
        <div className="logo-box" onClick={scrollToTop}>
          <img src={logo} alt="Paris Sanchari" className="logo-img" />
        </div>

        {/* MENU */}
        <div className="nav-menu">
          <a href="#home" 
             className={active === "home" ? "active" : ""} 
             onClick={(e) => handleLinkClick(e, "home")}>
             Home
          </a>
          <a href="#services" 
             className={active === "services" ? "active" : ""} 
             onClick={(e) => handleLinkClick(e, "services")}>
             Services
          </a>
          <a href="#packages" 
             className={active === "packages" ? "active" : ""} 
             onClick={(e) => handleLinkClick(e, "packages")}>
             Packages
          </a>
          <a href="#whyus" 
             className={active === "whyus" ? "active" : ""} 
             onClick={(e) => handleLinkClick(e, "whyus")}>
             Why Us
          </a>
          <a href="#contact" 
             className={active === "contact" ? "active" : ""} 
             onClick={(e) => handleLinkClick(e, "contact")}>
             Contact
          </a>
        </div>

        {/* CTA BUTTON */}
        <div className="nav-btn-box">
          <a href="https://wa.me/919866883843" target="_blank" className="header-btn">
            Book Now
          </a>
        </div>

      </div>
    </nav>
  );
}