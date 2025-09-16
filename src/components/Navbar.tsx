import { useEffect, useState } from "react";
import "../style.css"; // go up one level from components
import logo from "../assets/images/Logo/Logo.jpg"; // correct image import

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`} id="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <img
            src={logo}
            alt="Vision E-commerce Corp. Logo"
            className="logo-img"
          />
        </div>
        <ul className="nav-menu" id="nav-menu">
          <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
          <li className="nav-item"><a href="#about" className="nav-link">About Us</a></li>
          <li className="nav-item"><a href="#events" className="nav-link">Events</a></li>
          <li className="nav-item"><a href="#jobs" className="nav-link">Jobs</a></li>
          <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
        <div className="nav-toggle" id="mobile-menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
