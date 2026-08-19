import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import { Footer } from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Project from "./Components/Project/Project";
import Contact from "./Components/Contact/Contact";
import Education from "./Pages/Education/Education";
import Experience from "./Pages/Experience/Experience";
import Research from "./Pages/Research/Research";
import Blogs from "./Pages/Blogs/Blogs";
import ProjectDetails from "./Pages/ProjectDetails/ProjectDetails";
import ScrollToTop from "./Components/ScrollToTop";

const AppContent = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const location = useLocation();

  const handleScroll = () => {
    const reveals = document.querySelectorAll(".reveal");
    const windowHeight = window.innerHeight;

    reveals.forEach((reveal) => {
      const rect = reveal.getBoundingClientRect();
      // More forgiving check for elements already in view or at the top
      const isVisible = rect.top < windowHeight - 50 && rect.bottom > 50;

      if (isVisible) {
        reveal.classList.add("active");
      } else {
        reveal.classList.remove("active");
      }
    });
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.closest("a, button, .clickable, .nav-connect, .about-showmore, .project-showmore")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Trigger check whenever route changes or content might have updated
  useEffect(() => {
    // Small timeout to ensure DOM is ready after navigation
    const timeout = setTimeout(handleScroll, 100);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <ScrollToTop />
      <div
        className={`cursor ${isHovering ? "cursor-hover" : ""}`}
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
      ></div>
      <div
        className={`cursor-follower ${isHovering ? "cursor-follower-hover" : ""}`}
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
      ></div>
      <Navbar />
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="reveal fade-bottom">
                  <Hero />
                </div>
                <About />
                <div className="reveal fade-right">
                  <Project />
                </div>
                <div className="reveal fade-bottom">
                  <Contact />
                </div>
              </>
            }
          />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/research" element={<Research />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/details" element={<ProjectDetails />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter basename="/iamdey/">
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
