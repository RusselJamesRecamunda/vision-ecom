import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BusinessIntro from "../components/BusinessIntro";
import Philosophy from "../components/Philosophy";
import AboutUs from "../components/AboutUs";
import Events from "../components/Events";
import JobsSection from "../components/JobsSection";  
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { IconArrowUp } from "@tabler/icons-react";

function Home() {
 useEffect(() => {
  const btn = document.getElementById("backToTop");

  const handleScroll = () => {
    if (btn) {
      if (window.scrollY > 300) {
        btn.classList.add("visible");
      } else {
        btn.classList.remove("visible");
      }
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
      <Navbar />
      <Hero />
      <BusinessIntro />
      <Philosophy />
      <AboutUs />
      <Events />
      <JobsSection />
      <Contact />
      <Footer />
      {/* Back to Top Button */}
      <button id="backToTop" className="back-to-top">
        <i className="fas fa-arrow-up"></i>
        <IconArrowUp size={30} strokeWidth={3}/>
      </button>
    </div>
  );
}

export default Home;
