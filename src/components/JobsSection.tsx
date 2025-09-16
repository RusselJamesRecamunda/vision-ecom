import React, { useState } from "react";
import {
  IconHeart,
  IconCurrencyPeso,
  IconTrophy,
  IconCalendar,
  IconUsers,
  IconAward,
} from "@tabler/icons-react";
import "../style.css";
import Job1 from "../assets/images/Jobs/ma.png";
import Job2 from "../assets/images/Jobs/ojt.png";
import { Image, Modal } from "@mantine/core";
import ApplyForm from "./ApplyForm"; // import form
import '@mantine/core/styles.css';

const JobSection: React.FC = () => {
  const [opened, setOpened] = useState(false);

  return (
    <section id="jobs" className="jobs-section">
      <div className="container">
        <h2 className="section-title">Join Our Team</h2>
        <p className="section-subtitle">
          Join our growing team and build your career with us
        </p>

        {/* Jobs Grid */}
        <div className="jobs-grid">
          {/* Job 1 */}
          <div className="job-card">
            <div className="job-image">
              <Image
                src={Job1}
                alt="Marketing Assistant"
                className="job-img"
              />
            </div>
            <div className="job-content">
              <h3 className="job-title">Marketing Assistant</h3>
              <p className="job-description">
                We're looking for a Marketing Assistant to drive product success from research to launch. 
                You'll identify promising products, create visually appealing online assets 
                (Facebook pages, Webcake landing pages), and help test their effectiveness. 
                Ideal candidates are curious, detail-oriented, and have a strong eye for design and customer appeal.
              </p>
              <ul className="job-requirements">
                <li>Bachelor’s Degree in Information Technology, or other related courses</li>
                <li>Fresh graduates are welcome to apply</li>
                <li>Preferably knows how to use CapCut and Canva</li>
                <li>Willing to work in Sampaloc, Manila</li>
              </ul>
              <button
                className="job-apply-button btn-secondary"
                onClick={() =>
                  window.open("https://www.facebook.com/VisionEcomCorp", "_blank")
                }
              >
                Apply Now
              </button>
            </div>
          </div>

          {/* Job 2 */}
          <div className="job-card">
            <div className="job-image">
              <Image
                src={Job2}
                alt="Marketing Intern/OJT"
                className="job-img"
              />
            </div>
            <div className="job-content">
              <h3 className="job-title">Marketing Intern/OJT</h3>
              <p className="job-description">
                The Marketing Intern will help execute promotional activities, including creating and editing photo/video content,
                managing social media, supporting product research, and developing campaigns. This role offers valuable hands-on experience 
                within a fast-paced marketing team.
              </p>
              <ul className="job-requirements">
                <li>Currently enrolled students of Marketing, Advertising, Entrepreneurshio or other business-related courses</li>
                <li>Knowledge of inventory management systems</li>
                <li>Can do basic video and photo editing</li>
                <li>Willing to report in our office in Sampaloc, Manila for the whole duration</li>
              </ul>
              <button
                className="job-apply-button btn-secondary"
                onClick={() => setOpened(true)}
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>

        {/* Mantine Modal for Job 2 */}
       <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        centered
        size="auto"   // 👈 makes the modal follow form size
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        <ApplyForm job="Marketing Intern/OJT" />
      </Modal>


        {/* Job Benefits */}
        <div className="job-benefits">
          <h3 className="benefits-title">Why Work With Us?</h3>
          <div className="benefits-grid">
            <div className="benefit-item">
              <IconHeart color="#f97316" />
              <span>HMO</span>
            </div>
            <div className="benefit-item">
              <IconCurrencyPeso color="#f97316" />
              <span>Competitive Salary Package</span>
            </div>
            <div className="benefit-item">
              <IconTrophy color="#f97316" />
              <span>Incentives Performance Base</span>
            </div>
            <div className="benefit-item">
              <IconCalendar color="#f97316" />
              <span>Monthly Elevate Celebrate</span>
            </div>
            <div className="benefit-item">
              <IconAward color="#f97316" />
              <span>Professional Development Programs</span>
            </div>
            <div className="benefit-item">
              <IconUsers color="#f97316" />
              <span>Team Building Activities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobSection;
