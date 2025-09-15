import React from "react";
import {
  IconTarget,
  IconEye,
  IconUsers,
  IconRocket,
  IconHeart,
  IconShield,
  IconWorld,
  IconLeaf,
} from "@tabler/icons-react";
import "../style.css"; // make sure this contains your About Section CSS

const AboutUs: React.FC = () => {
  const values = [
    {
      title: "Value Driven Service Excellence",
      description:
        "We are dedicated to delivering exceptional service that exceeds customer expectations at every touchpoint, ensuring value in every interaction.",
      icon: <IconUsers size={32} color="#f97316" />,
    },
    {
      title: "Innovation",
      description:
        "We foster a culture of continuous innovation, finding new ways to enhance our platform, products, and services, providing unparalleled value to our customers.",
      icon: <IconRocket size={32} color="#f97316" />,
    },
    {
      title: "Service User Centricity",
      description:
        "We prioritize the needs and preferences of our users, crafting seamless and intuitive experiences that empower and delight them.",
      icon: <IconHeart size={32} color="#f97316" />,
    },
    {
      title: "Integrity and Transparency",
      description:
        "We operate with honesty, openness, and integrity, ensuring clarity and trust in all our interactions with customers, partners, and stakeholders.",
      icon: <IconShield size={32} color="#f97316" />,
    },
    {
      title: "Outstanding Loyalty",
      description:
        "We cultivate loyalty and trust by building long-lasting relationships through reliability, transparency, and consistent excellence.",
      icon: <IconWorld size={32} color="#f97316" />,
    },
    {
      title: "Nurturing Relationships",
      description:
        "We nurture meaningful relationships with customers, employees, and partners, focusing on collaboration and mutual growth.",
      icon: <IconLeaf size={32} color="#f97316" />,
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Us</h2>

        {/* Mission */}
        <div className="about-item mission-section">
          <div className="about-content">
            <div className="about-icon">
              <IconTarget size={64} />
            </div>
            <div className="about-text">
              <h3 className="about-title">Our Mission</h3>
              <p className="about-description">
                To provide exceptional, customer-focused e-commerce solutions that enhance the shopping experience, offering high-quality products and unparalleled service. We are committed to driving innovation, ensuring operational excellence, and fostering long-term relationships with customers and partners.
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
                To be the leading e-commerce company in the Philippines, recognized for our reliability, creativity, and ability to deliver diverse products and services that enrich the lives of our customers nationwide.
              </p>
            </div>
            <div className="about-icon">
              <IconEye size={64} />
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="values-section">
          <h3 className="values-title">Our Core Values</h3>
          <div className="values-grid">
            {values.map((item, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{item.icon}</div>
                <h4 className="value-title">{item.title}</h4>
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
