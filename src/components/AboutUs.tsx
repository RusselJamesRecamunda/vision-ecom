import React, { useEffect, useRef } from "react";
import "../style.css"; // make sure this contains your About Section CSS
import { FaEye, FaGlobe, FaHeart, FaLeaf, FaRocket, FaUsers } from "react-icons/fa";
import { FaBullseye, FaShield } from "react-icons/fa6";

const AboutUs: React.FC = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const values = [
    {
      title: "Value Driven Service Excellence",
      description:
        "We are dedicated to delivering exceptional service that exceeds customer expectations at every touchpoint, ensuring value in every interaction.",
      icon: <FaUsers size={32} color="#f97316" />,
    },
    {
      title: "Innovation",
      description:
        "We foster a culture of continuous innovation, finding new ways to enhance our platform, products, and services, providing unparalleled value to our customers.",
      icon: <FaRocket size={32} color="#f97316" />,
    },
    {
      title: "Service User Centricity",
      description:
        "We prioritize the needs and preferences of our users, crafting seamless and intuitive experiences that empower and delight them.",
      icon: <FaHeart size={32} color="#f97316" />,
    },
    {
      title: "Integrity and Transparency",
      description:
        "We operate with honesty, openness, and integrity, ensuring clarity and trust in all our interactions with customers, partners, and stakeholders.",
      icon: <FaShield size={32} color="#f97316" />,
    },
    {
      title: "Outstanding Loyalty",
      description:
        "We cultivate loyalty and trust by building long-lasting relationships through reliability, transparency, and consistent excellence.",
      icon: <FaGlobe size={32} color="#f97316" />,
    },
    {
      title: "Nurturing Relationships",
      description:
        "We nurture meaningful relationships with customers, employees, and partners, focusing on collaboration and mutual growth.",
      icon: <FaLeaf size={32} color="#f97316" />,
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
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Us</h2>

        {/* Mission */}
        <div className="about-item mission-section">
          <div className="about-content">
            <div className="about-icon">
              <FaBullseye size={64} />
            </div>
            <div className="about-text">
              <h3 className="about-title">Our Mission</h3>
              <p className="about-description">
                To provide exceptional, customer-focused e-commerce solutions
                that enhance the shopping experience, offering high-quality
                products and unparalleled service. We are committed to driving
                innovation, ensuring operational excellence, and fostering
                long-term relationships with customers and partners.
              </p>
            </div>
          </div>
        </div>

        {/* Vision */}
        <div className="about-item vision-section">
          <div className="about-content">
            <div className="about-text">
              <h3 className="about-title">Our Vision</h3>
              <p className="about-description">
                To be the leading e-commerce company in the Philippines,
                recognized for our reliability, creativity, and ability to
                deliver diverse products and services that enrich the lives of
                our customers nationwide.
              </p>
            </div>
            <div className="about-icon">
              <FaEye size={64} />
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="values-section">
          <h3 className="values-title">Our Core Values</h3>
          <div className="values-grid">
            {values.map((item, index) => (
              <div
                key={index}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className="value-card"
              >
                <div className="value-icon">{item.icon}</div>
                <h3 className="value-title">{item.title}</h3>
                <p className="value-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
