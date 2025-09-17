import React, { useEffect, useRef } from "react";
import "../style.css";
import { FaChartLine, FaHandshake, FaLightbulb, FaStar } from "react-icons/fa";

const Philosophy: React.FC = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const philosophyItems = [
    {
      title: "Innovation",
      description:
        "We constantly push boundaries and embrace new technologies to stay ahead of the curve.",
      icon: <FaLightbulb size={50} color="#1d4ed8" />,
    },
    {
      title: "Excellence",
      description:
        "We strive for perfection in every project and deliver exceptional quality in all our endeavors.",
      icon: <FaStar size={50} color="#1d4ed8" />,
    },
    {
      title: "Integrity",
      description:
        "We conduct business with honesty, transparency, and ethical practices at all times.",
      icon: <FaHandshake size={50} color="#1d4ed8" />,
    },
    {
      title: "Growth",
      description:
        "We foster continuous learning and development for our team and business partners.",
      icon: <FaChartLine size={50} color="#1d4ed8" />,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.2 } // trigger when 20% is visible
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section className="philosophy-section">
      <div className="container">
        <h2 className="section-title">Our Philosophy & Values</h2>
        <div className="philosophy-grid">
          {philosophyItems.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="philosophy-card"
            >
              <div className="philosophy-icon">{item.icon}</div>
              <h3 className="philosophy-title">{item.title}</h3>
              <p className="philosophy-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
