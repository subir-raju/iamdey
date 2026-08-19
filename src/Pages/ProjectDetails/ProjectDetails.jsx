import React, { useState } from "react";
import "./ProjectDetails.css";
import project_data from "../../assets/project_data1";

const ProjectDetails = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleProjectClick = (index) => {
    setSelectedProject(index);
    setActiveImageIndex(0);
  };

  const currentProject = project_data[selectedProject];
  const images = currentProject.images || [];

  const handlePrev = () => {
    setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const handleNext = () => {
    setActiveImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="project-details-page">
      <h1 className="project-details-title">Project Details</h1>
      <div className="project-details-container">
        <div className="project-list">
          {project_data.map((project, index) => (
            <button
              key={index}
              className={`project-list-item ${
                selectedProject === index ? "selected" : ""
              }`}
              onClick={() => handleProjectClick(index)}
            >
              {project.title}
            </button>
          ))}
        </div>

        <div className="project-details">
          <h2>{currentProject.title}</h2>

          <div className="coverflow-container">
            {images.length > 0 ? (
              <>
                <div className="coverflow-wrapper">
                  {images.map((img, idx) => {
                    let position = "inactive";
                    if (idx === activeImageIndex) position = "active";
                    else if (idx === activeImageIndex - 1 || (activeImageIndex === 0 && idx === images.length - 1)) position = "prev";
                    else if (idx === activeImageIndex + 1 || (activeImageIndex === images.length - 1 && idx === 0)) position = "next";

                    return (
                      <div
                        key={idx}
                        className={`coverflow-item ${position}`}
                        onClick={() => setActiveImageIndex(idx)}
                      >
                        <img src={img} alt="Project Screenshot" />
                      </div>
                    );
                  })}
                </div>
                {images.length > 1 && (
                  <div className="coverflow-controls">
                    <button onClick={handlePrev} className="slider-btn prev">&#10094;</button>
                    <button onClick={handleNext} className="slider-btn next">&#10095;</button>
                  </div>
                )}
              </>
            ) : (
              <p className="no-image-text">No images available for this project.</p>
            )}
          </div>

          <p className="project-description">{currentProject.description}</p>

          <div className="project-technologies">
            <h3>Tech Stack</h3>
            <div className="tech-icons">
              {currentProject.technologies.map((tech, index) => (
                <img
                  key={index}
                  src={tech.icon}
                  alt={tech.name}
                  title={tech.name}
                  className="tech-icon"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
