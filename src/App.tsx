import { useEffect } from "react";
import "./style.css";

function App() {
  useEffect(() => {
    const btn = document.getElementById("backToTop");
    const handleScroll = () => {
      if (btn) {
        btn.style.display = window.scrollY > 300 ? "block" : "none";
      }
    };
    window.addEventListener("scroll", handleScroll);

    if (btn) {
      btn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Navigation */}
      <nav className="navbar" id="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            {/* ✅ Use public path */}
            <img
              src="/images/Logo/Logo.jpg"
              alt="Vision E-commerce Corp. Logo"
              className="logo-img"
            />
          </div>
          <ul className="nav-menu" id="nav-menu">
            <li className="nav-item">
              <a href="#home" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">About Us</a>
            </li>
            <li className="nav-item">
              <a href="#events" className="nav-link">Events</a>
            </li>
            <li className="nav-item">
              <a href="#jobs" className="nav-link">Jobs</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">Contact</a>
            </li>
          </ul>
          <div className="nav-toggle" id="mobile-menu">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>

    <section id="home" className="hero-section">
  <div className="hero-background">
    <img
      src="/images/Hero/vision1.png"
      alt="E-commerce Business"
      className="hero-image"
    />
  </div>
  <div className="hero-overlay"></div>
  <div className="hero-content">
    <h1 className="hero-title">Welcome to Vision E-commerce</h1>
    <p className="hero-subtitle">Revolutionizing the way businesses grow online</p>
  </div>
</section>


    </div>
  );
}

export default App;
