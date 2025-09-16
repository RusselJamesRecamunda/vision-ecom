import React from "react";
import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconMapPin,
  IconPhone,
  IconMail,
} from "@tabler/icons-react";
import "../style.css"; // your footer CSS

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Vision Profile */}
          <div className="footer-section">
            <h3 className="footer-title">Vision Profile</h3>
            <p className="footer-description">
              Empowering businesses worldwide with innovative e-commerce
              solutions and exceptional service.
            </p>
            <div className="footer-social">
              <a
                href="https://www.facebook.com/VisionEcomCorp"
                className="footer-social-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandFacebook size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/visionecommerce/posts/?feedView=all"
                className="footer-social-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a href="#home" className="footer-link">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="footer-link">
                  About Us
                </a>
              </li>
              <li>
                <a href="#events" className="footer-link">
                  Events
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Services</h4>
            <ul className="footer-links">
              <li>
                <a href="#" className="footer-link">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Logistics Management
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Customer Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Contact Info</h4>
            <div className="footer-contact">
              <p>
                <IconMapPin color="orange" size={40} /> 915 Josefina Street Barangay 512
                Sampaloc, Manila, Philippines
              </p>
              <p>
                <IconPhone color="orange" size={20} /> 0935 809 8669
              </p>
              <p>
                <IconMail color="orange" size={20} /> connect@visionecomcorp.com
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; 2020 Vision E-commerce Corp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
