import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Pages.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">

      {/* Desktop menu */}
      <nav className="nav-links">
        <Link to="/"><i className="bi bi-house-fill"></i> Home</Link>
        <Link to="/about"><i className="bi bi-person-fill"></i> About</Link>
        <Link to="/skills"><i className="bi bi-code-slash"></i> Skills</Link>
        <Link to="/certifications"><i className="bi bi-award-fill"></i> Certifications</Link>
        <Link to="/projects"><i className="bi bi-briefcase-fill"></i> Projects</Link>
        <Link to="/contact"><i className="bi bi-envelope-fill"></i> Contact</Link>
      </nav>

      {/* Mobile hamburger + close */}
      <div
        className="menu-icon"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? "✖" : "☰"}
      </div>

      {/* Mobile dropdown menu */}
      {open && (
        <nav className="mobile-menu">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/projects" onClick={() => setOpen(false)}>Projects</Link>
          <Link to="/skills" onClick={() => setOpen(false)}>Skills</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </nav>
      )}
    </header>
  );
}
