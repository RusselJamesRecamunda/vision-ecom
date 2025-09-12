import { useEffect, useState } from "react";
import { Box, Button, Container, Grid, Image, Title, Text, Paper} from "@mantine/core";
import "./style.css";
import { IconStar, IconBulb, IconChartLine, IconHeartHandshake } from "@tabler/icons-react";


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

  const philosophyItems = [
  {
    title: 'Innovation',
    description: 'We constantly push boundaries and embrace new technologies to stay ahead of the curve.',
    icon: <IconBulb size={48} color="#1d4ed8" />, // Blue color to match your CSS
  },
  {
    title: 'Excellence',
    description: 'We strive for perfection in every project and deliver exceptional quality in all our endeavors.',
    icon: <IconStar size={48} color="#1d4ed8" />,
  },
  {
    title: 'Integrity',
    description: 'We conduct business with honesty, transparency, and ethical practices at all times.',
    icon: <IconHeartHandshake size={48} color="#1d4ed8" />,
  },
  {
    title: 'Growth',
    description: 'We foster continuous learning and development for our team and business partners.',
    icon: <IconChartLine size={48} color="#1d4ed8" />,
  },
];

  return (
    <div>
      {/* Navigation */}
      <nav className="navbar" id="navbar">
        <div className="nav-container">
          <div className="nav-logo">
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

      {/* Hero Section */}
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

        {/* Business Introduction */}
        <section className="business-intro">
        <div className="container">
            <div className="intro-content">
                <div className="intro-image">
                    <img src="images/Logo/Logo.jpg" alt="Our Business" className="intro-img" />
                </div>
                <div className="intro-text">
                    <h2 className="intro-title">About Our Business</h2>
                    <p className="intro-description">
                        Vision E-commerce Trading Corp. is a cutting-edge e-commerce platform dedicated to revolutionizing the way businesses operate in the digital marketplace. We combine innovative technology with exceptional service to deliver unparalleled results for our clients and partners.
                    </p>
                    <p className="intro-description">
                        Our commitment to excellence drives everything we do, from developing state-of-the-art solutions to fostering meaningful relationships with our team members and customers.
                    </p>
                    <a href="#about" className="intro-button btn-primary">Learn More</a>
                </div>
                </div>
            </div>
        </section>

      {/* Philosophy & Values Section */}
          <section className="philosophy-section">
      <Container>
        <Title className="section-title">Our Philosophy & Values</Title>

        <Grid className="philosophy-grid">
          {philosophyItems.map((item, index) => (
            <Grid.Col key={index} span={12} sm={6} md={3}>
              <Paper className="philosophy-card" shadow="md" padding="xl" radius="lg">
                <div className="philosophy-icon">{item.icon}</div>
                <Text className="philosophy-title" weight={500} size="lg" mt="sm">
                  {item.title}
                </Text>
                <Text className="philosophy-description" mt="xs">
                  {item.description}
                </Text>
              </Paper>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </section>
    </div>
  );
}

export default App;
