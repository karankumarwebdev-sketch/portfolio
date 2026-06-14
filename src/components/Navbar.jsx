import "../styles/navbar.css";
import "../styles/global.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
gsap.registerPlugin(useGSAP);
import { useState } from "react";
import logoImg from "../assets/img/k-logo-nobg.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <div className="logo">
            <img src={logoImg} alt="Karan Logo" />
          </div>

          {/* Hamburger */}
          <div
            className={`menu-toggle ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Menu */}
          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li>
              <a href="#home" onClick={() => setMenuOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => setMenuOpen(false)}>
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" onClick={() => setMenuOpen(false)}>
                Skills
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setMenuOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </li>

            <li className="mobile-btn">
              <a
                href="#contact"
                className="hire-btn"
                onClick={() => setMenuOpen(false)}
              >
                Hire Me
              </a>
            </li>
          </ul>

          <a href="#contact" className="hire-btn desktop-btn">
            Hire Me
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
