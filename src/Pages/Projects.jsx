import React from "react";
import "./Pages.css";
import Desidiaries from "../assets/Desidiaries.png";
import WeatherApp from "../assets/WeatherApp.png";
import PortfolioPic from "../assets/PortfolioPicture.png";
import authsystem from "../assets/authsystem.png"
const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    desc: "A personal portfolio built with React to showcase my skills, projects, and contact details.",
    img: "src/assets/PortfolioPicture.png",     // place image in public/images or adjust path
    link: "https://github.com/your-username/portfolio"
  },
  {
  id: 2,
  title: "Authentication System",
  desc: "Full-stack MERN authentication system with product signup, signin, forgot password and dashboard.",
  img: authsystem,
  link: "https://github.com/sowmyass21/Authentication-System.git",
  },
  {
    id: 3,
    title: "Desi Diaries Blog",
    desc: "Blog platform with CRUD posts, categories, and rich text editor.",
    img: "src/assets/Desidiaries.png",
    link: "https://github.com/sowmyass21/Desi-Diaries-blog.git"
  },
  {
    id: 4,
    title: "Task Management Tool",
    desc: "Task manager with drag-and-drop boards and deadlines.",
    img: "/images/tasks.jpg",
    link: "https://github.com/your-username/task-manager"
  },
  {
    id: 5,
    title: "Social Media App",
    desc: "Real-time social app with posts, likes and comments.",
    img: "/images/social.jpg",
    link: "https://github.com/your-username/social-app"
  },
  {
    id: 6,
    title: "Weather App",
    desc: "Real time weather forecasting app using OpenWeatherMap API.",
    img: "/src/assets/WeatherApp.png",
    link: "https://github.com/sowmyass21/weather-app.git"
  }
];

export default function Projects() {
  return (
    <div className="app-bg">
      <section className="projects">
        <h3>Projects</h3>
        <div className="projects-grid">
          {projects.map((p) => (
            <article key={p.id} className="project-card">
              <div className="project-image">
                <img src={p.img} alt={p.title} />
              </div>
              <div className="project-body">
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
                <button
                  className="primary-btn project-btn"
                  onClick={() => window.open(p.link, "_blank")}
                >
                  View on GitHub
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
