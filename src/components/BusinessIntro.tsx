import logo from "../assets/images/Logo/Logo.jpg"; 
import "../style.css";

function BusinessIntro() {
  return (
    <section className="business-intro">
      <div className="container">
        <div className="intro-content">
          <div className="intro-image">
            <img
              src={logo}
              alt="Our Business"
              className="intro-img"
            />
          </div>
          <div className="intro-text">
            <h2 className="intro-title">About Our Business</h2>
            <p className="intro-description">
              Vision E-commerce Trading Corp. is a cutting-edge e-commerce platform dedicated to revolutionizing the way businesses operate in the digital marketplace...
            </p>
            <p className="intro-description">
              Our commitment to excellence drives everything we do, from developing state-of-the-art solutions to fostering meaningful relationships with our team members and customers.
            </p>
            <a href="#about" className="intro-button btn-primary">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BusinessIntro;
