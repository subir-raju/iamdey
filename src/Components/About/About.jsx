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
          <div className="about-para">
            <h1>Work Experience</h1>
            <p>
              I am Subir, a current master's degree student in data science at
              Tampere University.
            </p>
            <Link to="/experience" className="about-showmore-link">
              <div className="about-showmore">
                <p>See More</p>
                <img src={arrow_icon} alt="Arrow Icon" />
              </div>
            </Link>
          </div>
          <div className="about-para">
            <h1>Education</h1>
            <p>Tampere University, Data Science</p>
            <Link to="/education" className="about-showmore-link">
              <div className="about-showmore">
                <p>See More</p>
                <img src={arrow_icon} alt="Arrow Icon" />
              </div>
            </Link>
          </div>
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
  );
};

export default About;
