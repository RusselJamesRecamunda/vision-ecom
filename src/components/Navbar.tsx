import { useEffect, useState } from "react";
import "../style.css"; // go up one level from components
import logo from "../assets/images/Logo/Logo.jpg"; // correct image import

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home"); // default active

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "events", label: "Events" },
    { id: "jobs", label: "Jobs" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <img src={logo} alt="Logo" className="logo-img" />
        </div>

        <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`nav-link ${activeLink === link.id ? "active" : ""}`}
                onClick={() => {
                  setActiveLink(link.id);
                  setMenuOpen(false); // close mobile menu when clicked
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div
          className={`nav-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
}


export default Navbar;
