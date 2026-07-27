import React from "react";
import "./Blogs.css";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="blog-empty-container">
      <div className="error-content">
        <div className="glitch-wrapper">
          <h1 className="error-code" data-text="404">404</h1>
        </div>
        <div className="ghost-icon">
          <div className="ghost-body">
            <div className="ghost-eyes"></div>
            <div className="ghost-feet">
              <span></span><span></span><span></span><span></span><span></span>
            </div>
          </div>
        </div>
        <h2 className="error-message">Blog posts not found.</h2>
        <p className="error-description">
          They are currently out for a walk with the <span>NullPointer</span>.
          <br />
          Probably debating whether a semicolon is really necessary.
        </p>
        <Link to="/" className="back-home-btn clickable">
          Take me back to safety
        </Link>
      </div>
      <div className="floating-code">
        <span style={{"--i": 1}}>{ "null" }</span>
        <span style={{"--i": 2}}>{ "{ }" }</span>
        <span style={{"--i": 3}}>{ "404" }</span>
        <span style={{"--i": 4}}>{ "undefined" }</span>
        <span style={{"--i": 5}}>{ ";" }</span>
        <span style={{"--i": 6}}>{ "void" }</span>
      </div>
    </div>
  );
};

export default Blog;
