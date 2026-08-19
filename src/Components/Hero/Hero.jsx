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
       I’m a Data and Software Engineer who enjoys turning complex data into variables people can actually understand, use, and act on. With a background that spans full-stack development, machine learning, AI, and data-intensive research, I like working where software meets intelligence and where technical ideas become real-world solutions.

       My work has taken me from building applications and AI-powered systems to designing machine learning approaches for anomaly detection, large-scale data processing, and data-driven decision making. Along the way, I’ve also contributed to research and peer-reviewed publications, exploring how intelligent systems can uncover structure, insights, and meaning from complex data.

       I am enthusiast in developing solutions that goes beyond simply working. I want it to make people think, create, decide, and discover something they couldn’t see before.

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
