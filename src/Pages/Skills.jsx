import React from "react";
import "./Pages.css";

export default function Skills() {
  return (
    <div className="app-bg">
      <section className="skills">
        <h3>Skills</h3>

        <div className="skills-grid">
          {/* Programming Languages */}
          <div className="skill-card">
            <h4>Programming Languages</h4>
            <ul className="skill-icons">
              <li><i className="devicon-javascript-plain"></i>JavaScript</li>
              <li><i className="devicon-python-plain"></i>Python</li>
            </ul>
          </div>

          {/* Frameworks & Libraries */}
          <div className="skill-card">
            <h4>Frameworks & Libraries</h4>
            <ul className="skill-icons">
              <li><i className="devicon-react-original"></i>React</li>
              <li><i className="devicon-nodejs-plain"></i>Node.js</li>
            </ul>
          </div>

          {/* Tools & Platforms */}
          <div className="skill-card">
            <h4>Tools & Platforms</h4>
            <ul className="skill-icons">
              <li><i className="devicon-git-plain"></i>Git</li>
              <li><i className="devicon-mysql-plain"></i>MySQL</li>
            </ul>
          </div>

          {/* Academic Courses */}
          <div className="skill-card">
            <h4>Academic Courses</h4>
            <ul className="skill-icons">
              <li>Data Structures & Algorithms</li>
              <li>Operating Systems</li>
              <li>Computer Networks</li>
              <li>DBMS</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
