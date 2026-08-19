import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import arrow_icon from "../../assets/arrow_icon.svg";
import skillsData from "../../assets/skillsData";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-section">
        <div className="about-right">
          {/* Work Experience with independent reveal */}
          <div className="reveal fade-left">
            <div className="about-para">
              <h1>Work Experience</h1>
              <div className="latest-info">
                <h3>Full Stack Developer</h3>
                <p>HypeScout Pte. Ltd.</p>
                <span>July 2021 - January 2023</span>
              </div>
              <Link to="/experience" className="about-showmore-link">
                <div className="about-showmore">
                  <p>See More</p>
                  <img src={arrow_icon} alt="Arrow Icon" />
                </div>
              </Link>
            </div>
          </div>

          {/* Education with independent reveal */}
          <div className="reveal fade-right">
            <div className="about-para">
              <h1>Education</h1>
              <div className="latest-info">
                <h3>Master's in Data Science</h3>
                <p>Tampere University (TAU)</p>
                <span>August 2023 - Present</span>
              </div>
              <Link to="/education" className="about-showmore-link">
                <div className="about-showmore">
                  <p>See More</p>
                  <img src={arrow_icon} alt="Arrow Icon" />
                </div>
              </Link>
            </div>
          </div>

          {/* Skills with independent reveal */}
          <div className="reveal fade-bottom">
            <div className="about-skills-section">
              <h1>Skills</h1>
              <div className="about-skills">
                {skillsData.map((skill, index) => (
                  <div
                    key={index}
                    className="about-skill"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="skill-icon-wrapper">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="skill-icon"
                      />
                      <div className="skill-tooltip">{skill.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
