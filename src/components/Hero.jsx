import developerImg from "../assets/img/banner-nobg.png";
import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-wrapper">
          {/* Left Content */}
          <div className="hero-content">
            <span className="hero-tag">
              WEB DESIGNER/DEVELOPER • REACT • WORDPRESS
            </span>

            <h1 className="hero-title">
              Crafting Modern & <br />
              High-Performance <span>Web Experiences</span>
            </h1>

            <p className="hero-description">
              Web Designer & Developer specializing in WordPress, React, and
              modern front-end technologies. I build fast, scalable, and
              user-focused websites with clean code and exceptional user
              experiences.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-btn">
                View Projects
              </a>

              <a
                href="../public/Karan_Portfolio.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-btn"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="hero-image">
            <img src={developerImg} alt="Developer Illustration" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
