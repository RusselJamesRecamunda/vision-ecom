import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BusinessIntro from "../components/BusinessIntro";
import Philosophy from "../components/Philosophy";
import { useEffect } from "react";

function Home() {
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
      <Navbar />
      <Hero />
      <BusinessIntro />
      <Philosophy />
    </div>
  );
}

export default Home;
