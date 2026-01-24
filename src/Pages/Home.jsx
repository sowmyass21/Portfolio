import React from "react";
import "./Pages.css";
import profilePic from "../assets/portfolio pic.jpeg";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate("/projects");   // go to Projects page
  };

  return (
    <div className="app-bg">
      <div className="home">
        <div className="home-image">
          <img src={profilePic} alt="Profile" />
        </div>

        <div className="home-content">
          <p>Hello👋. I'm Sowmya Shahukari</p>
          <ul>
            <li>Full Stack Developer💻</li>
            <li>Competitive Programmer</li>
          </ul>
          <p>
            I build clean, functional websites with great design. Passionate about
            web development, problem-solving and DSA.
          </p>
          <button className="primary-btn" onClick={handleExplore}>
            Explore My Work
          </button>

          <div className="icons">
            <a href="https://github.com/sowmyass21" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/sowmya-shahukari/" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
