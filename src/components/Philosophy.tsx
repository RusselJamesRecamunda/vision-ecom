import React from "react";
import { IconStar, IconBulb, IconChartLine, IconHeartHandshake } from "@tabler/icons-react";
import "../style.css"; // make sure this contains your .philosophy-section CSS

const Philosophy: React.FC = () => {
  const philosophyItems = [
    {
      title: "Innovation",
      description:
        "We constantly push boundaries and embrace new technologies to stay ahead of the curve.",
      icon: <IconBulb size={48} color="#1d4ed8" />,
    },
    {
      title: "Excellence",
      description:
        "We strive for perfection in every project and deliver exceptional quality in all our endeavors.",
      icon: <IconStar size={48} color="#1d4ed8" />,
    },
    {
      title: "Integrity",
      description:
        "We conduct business with honesty, transparency, and ethical practices at all times.",
      icon: <IconHeartHandshake size={48} color="#1d4ed8" />,
    },
    {
      title: "Growth",
      description:
        "We foster continuous learning and development for our team and business partners.",
      icon: <IconChartLine size={48} color="#1d4ed8" />,
    },
  ];

  return (
    <section className="philosophy-section">
      <div className="container">
        <h2 className="section-title">Our Philosophy & Values</h2>
        <div className="philosophy-grid">
          {philosophyItems.map((item, index) => (
            <div key={index} className="philosophy-card">
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
