import React, { useState, useEffect } from "react";
import "./Hero.css";
import profile_img from "../../assets/propic.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import pdf from "../../assets/CV_SubirDeyRaju.pdf";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Subir";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      // Add a longer delay for the first letter to wait for the reveal animation
      const delay = index === 0 ? 800 : 200;

      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <div id="home" className="hero">
      <img src={profile_img} alt=" " className="hero-profile-img" />
      <h1>
        Hello, I'm<span> {text}</span>
      </h1>
      <p>
        A Master’s student in Data Science at Tampere University, who is
        passionate about working with large-scale complex data, transforming
        them into meaningful insights and intelligent solutions. My journey
        spans from building full-stack applications and integrating AI-powered
        chatbots to designing and applying machine learning models for anomaly
        detection and reliable data-driven decision making. Along the way, I’ve
        contributed to research on large-scale data pipelines, culminating in
        peer-reviewed publications. I love working at the intersection of data,
        software, and people, developing solutions that are smarter and capable
        of shaping discussions, spurring creativity, and having an actual
        impact.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a href={pdf} download={"CV_SubirDeyRaju.pdf"}>
            My CV{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
