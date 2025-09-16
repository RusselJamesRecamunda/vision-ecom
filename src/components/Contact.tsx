import React from "react";
import {
  IconMapPin,
  IconPhone,
  IconMail,
  IconClock,
  IconBrandFacebook,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import "../style.css"; // your Contact Section CSS is here

const ContactSection: React.FC = () => {
  const contactInfo = [
    {
      icon: <IconMapPin size={32} color="#0F5078" />,
      title: "Address",
      text: (
        <>
          915 Josefina Street
          <br />
          512 Sampaloc, Manila,
          <br />
          Philippines
        </>
      ),
    },
    {
      icon: <IconPhone size={32} color="#0F5078" />,
      title: "Phone",
      text: "0935 809 8669",
    },
    {
      icon: <IconMail size={32} color="#0F5078" />,
      title: "Email",
      text: "connect@visionecomcorp.com",
    },
    {
      icon: <IconClock size={32} color="#0F5078" />,
      title: "Business Hours",
      text: "Monday - Saturday: 8:00 AM - 5:00 PM",
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-subtitle">
          Get in touch with us for any inquiries
        </p>

        <div className="contact-content">
          {/* Contact Info */}
          <div className="contact-info">
            {contactInfo.map((item, index) => (
              <div key={index} className="contact-info-item">
                <div className="contact-info-icon">{item.icon}</div>
                <div className="contact-info-text">
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Google Map */}
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.0725198325274!2d120.98919241465432!3d14.61321878079996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b61000e37c99%3A0x8361d30b0fcb4f5c!2s915%20Josefina%20St%2C%20Sampaloc%2C%20Manila%2C%201008%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1690000000000!5m2!1sen!2sph"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Social Media */}
        <div className="social-media-section">
          <h3 className="social-title">Follow Us</h3>
          <div className="social-links">
            <a
              href="https://www.facebook.com/VisionEcomCorp"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandFacebook size={24} />
            </a>
            <a
              href="https://www.linkedin.com/company/visionecommerce/posts/?feedView=all"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
