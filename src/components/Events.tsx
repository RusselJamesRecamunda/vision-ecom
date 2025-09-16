import { useState } from "react";
import "../style.css";
import team1 from "../assets/images/Events/Team Building/team1.jpg";
import team4 from "../assets/images/Events/Team Building/team4.JPG";
import team3 from "../assets/images/Events/Team Building/team3.JPG";
import team5 from "../assets/images/Events/Team Building/team5.png";

import tree1 from "../assets/images/Events/Tree Planting/tree1.jpg";
import tree2 from "../assets/images/Events/Tree Planting/tree2.jpg";
import tree3 from "../assets/images/Events/Tree Planting/tree3.jpg";
import tree4 from "../assets/images/Events/Tree Planting/tree4.jpg";
import tree5 from "../assets/images/Events/Tree Planting/tree5.jpg";
import tree6 from "../assets/images/Events/Tree Planting/tree6.jpg";

import training1 from "../assets/images/Events/Training/training1.jpg";
import training4 from "../assets/images/Events/Training/training4.png";
import training5 from "../assets/images/Events/Training/training5.jpg";
import training6 from "../assets/images/Events/Training/training6.jpg";
import training7 from "../assets/images/Events/Training/training7.jpg";

import social1 from "../assets/images/Events/Socials/social1.png";
import social2 from "../assets/images/Events/Socials/social2.png";
import social3 from "../assets/images/Events/Socials/social3.png";


type EventItem = {
  category: string;
  image: string;
  title: string;
  date: string;
};

const events: EventItem[] = [
  { category: "team-building", image: team1, title: "Beach Break 2025", date: "June 2025" },
  { category: "team-building", image: team4, title: "Beach Break", date: "June 2025" },
  { category: "team-building", image: team3, title: "SportsFest-Palarong Pinoy", date: "May 2025" },
  { category: "team-building", image: team5, title: "Learning from the past, Building the future", date: "July 2024" },

  { category: "tree-planting", image: tree1, title: "Rooted in Purpose, Growing Together", date: "June 2025" },
  { category: "tree-planting", image: tree2, title: "Rooted in Purpose, Growing Together", date: "June 2025" },
  { category: "tree-planting", image: tree3, title: "Rooted in Purpose, Growing Together", date: "June 2025" },
  { category: "tree-planting", image: tree4, title: "Rooted in Purpose, Growing Together", date: "June 2025" },
  { category: "tree-planting", image: tree5, title: "Rooted in Purpose, Growing Together", date: "June 2025" },
  { category: "tree-planting", image: tree6, title: "Rooted in Purpose, Growing Together", date: "March 2025" },

  { category: "training", image: training1, title: "Financial Literacy Seminar", date: "April 2025" },
  { category: "training", image: training4, title: "Workshop", date: "July 2024" },
  { category: "training", image: training5, title: "Leadership Training", date: "April 2025" },
  { category: "training", image: training6, title: "Worker’s Attitude and Values Enhancement Seminar", date: "July 2025" },
  { category: "training", image: training7, title: "Worker’s Attitude and Values Enhancement Seminar", date: "July 2025" },

  { category: "social", image: social1, title: "Year End Party", date: "December 2024" },
  { category: "social", image: social2, title: "Elevate Celebrate - Halloween Party", date: "November 2024" },
  { category: "social", image: social3, title: "Elevate Celebrate", date: "January 2025" },
];


const Events = () => {
  const [filter, setFilter] = useState<string>("all");

  const filteredEvents =
    filter === "all" ? events : events.filter((event) => event.category === filter);

  return (
    <section id="events" className="events-section">
      <div className="container">
        {/* Heading */}
        <h2 className="section-title">Events</h2>
        <p className="section-subtitle">Explore our company events and team activities</p>

        {/* Filters */}
        <div className="event-filters">
          {["all", "team-building", "tree-planting", "training", "social"].map(
            (category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`event-filter-button ${
                  filter === category ? "active" : ""
                }`}
              >
                {category === "all"
                  ? "All Events"
                  : category.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
              </button>
            )
          )}
        </div>

        {/* Gallery */}
        <div className="events-gallery">
          {filteredEvents.map((event, index) => (
            <div key={index} className="event-item">
              <img src={event.image} alt={event.title} className="event-image" />
              <div className="event-overlay">
                <h4 className="event-title">{event.title}</h4>
                <p className="event-date">{event.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
