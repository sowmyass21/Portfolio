import React from "react";
import "./Pages.css";

export default function About() {
  return (
    <div className="app-bg">
      <section className="about">
        {/* Top: left (summary) + right (details + resume) */}
        <div className="about-grid">
          {/* LEFT: Professional Summary */}
          <div className="about-summary">
            <h3>Professional Summary</h3>
            <p>
              I'm <b>Sowmya Shahukari</b> - an aspiring full-stack developer with a strong
              foundation in both frontend and backend technologies. I enjoy learning new
              technologies, taking on challenges, and creating interactive web experiences.
              I'm always curious to learn and grow in the field of web development.
            </p>
            <p>
              I'm currently pursuing my B.Tech in Electronics and Communication Engineering
              at GMR Institute of Technology. I've completed internships, built multiple
              projects, and actively improve my skills on platforms like LeetCode and GitHub.
            </p>
          </div>

          {/* RIGHT: details + resume stacked */}
          <div className="about-right">
            <div className="about-details">
              <h5 className="about-name">Sowmya Shahukari</h5>
              <p className="about-line">
                <i className="bi bi-envelope"></i>
                <span>sowmyashahukari03@gmail.com</span>
              </p>
              <p className="about-line">
                <i className="bi bi-mortarboard"></i>
                <span>B.Tech - Electronics and Communication Engineering</span>
              </p>
              <p className="about-line">
                <i className="bi bi-geo-alt"></i>
                <span>Rajam, Andhra Pradesh</span>
              </p>
            </div>

            <div className="about-resume">
              <h3>My Resume</h3>
              <p>
                Download or view my resume containing my qualifications, skills, experience,
                and projects.
              </p>
              <div className="resume-actions">
                <button className="primary-btn">
                    
                  <a
                    href="/sowmya resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "inherit" }}
                ><i className="bi bi-file-earmark"></i> View Resume
                </a>

                </button>
                <button className="primary-btn">
                    
                  <a href="/sowmya resume.pdf"
                    download="sowmya resume.pdf"
                    style={{ textDecoration: "none", color: "inherit" }}
                  ><i className="bi bi-download"></i> Download Resume</a>
                </button>
              </div>
            </div>
          </div>
        </div>

        
        <h3 className="journey-title">My Journey</h3>

<div className="journey-timeline">
  {/* the vertical line */}
  <div className="journey-track"></div>

  {/* all items */}
  <div className="journey-list">
    <div className="journey-row">
      <div className="journey-dot">
        <i className="bi bi-briefcase-fill"></i>
      </div>
      <div className="journey-card">
        <h4>VLSI Intern</h4>
        <p className="journey-sub">Abhyasa Semicon Technologies</p>
        <p className="journey-date">June 2025 - July 2025</p>
        <p>
          Worked on designing and testing VLSI circuits using Cadence tools,
          gaining exposure to semiconductor design workflows.
        </p>
      </div>
    </div>

    <div className="journey-row">
      <div className="journey-dot">
        <i className="bi bi-mortarboard-fill"></i>
      </div>
      <div className="journey-card">
        <h4>Bachelor of Technology</h4>
        <p className="journey-sub">GMR Institute of Technology</p>
        <p className="journey-date">2023 - Present</p>
        <p>
          Pursuing B.Tech 3<sup>rd</sup> year in Electronics and Communication Engineering with a CGPA
          of 8.92, focusing on core ECE subjects and software development.
        </p>
      </div>
    </div>

    <div className="journey-row">
      <div className="journey-dot">
        <i className="bi bi-book-fill"></i>
      </div>
      <div className="journey-card">
        <h4>Intermediate Education</h4>
        <p className="journey-sub">Sri Chaitanya Junior College</p>
        <p className="journey-date">2021 - 2023</p>
        <p>
          MPC Stream - Scored 969/1000
        </p>
      </div>
    </div>

    <div className="journey-row">
      <div className="journey-dot">
        <i className="bi bi-pencil-fill"></i>
      </div>
      <div className="journey-card">
        <h4>High School Education</h4>
        <p className="journey-sub">Govt High School</p>
        <p className="journey-date">Completed in 2021</p>
        <p>Scored 568 </p>
      </div>
    </div>
  </div>
</div>

      </section>
    </div>
  );
}
