import { useEffect } from "react";
import { Box, Image } from "@mantine/core";
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

        <Box
          component="section"
          id="home"
          pos="relative"
          h="80vh"
          mih={500}
          display="flex"
          style={{
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            overflow: "hidden",
          }}
        >
          {/* Background Image */}
          <Image
            src="/images/Hero/vision1.png"
            alt="E-commerce Business"
            pos="absolute"
            inset={0}
            w="100%"
            h="100%"
            fit="cover"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              zIndex: 0,
            }}
          />

        {/* Overlay */}
        <Box
          pos="absolute"
          inset={0}
          style={{ zIndex: 1 }}
          />
        </Box>
    </div>
  );
}

export default App;
