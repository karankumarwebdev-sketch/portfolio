import "../styles/skills.css";
import logoimg1 from "../assets/img/wordpress-img.png";
import logoimg2 from "../assets/img/frontend-img.png";
import logoimg3 from "../assets/img/backend-img.png";
import logoimg4 from "../assets/img/database-img.png";

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="section-header">
          <span>EXPERTISE</span>
          <h2>Technical Skills</h2>
        </div>

        <div className="skills-grid">
          <div className="skill-card">
            <img src={logoimg1} alt="WordPress Development" />
            <h3>WordPress Development</h3>
            <p>
              Custom themes, ACF, Elementor, GenerateBlocks, WooCommerce, and
              performance optimization.
            </p>
          </div>

          <div className="skill-card">
            <img src={logoimg2} alt="Frontend Development" />
            <h3>Frontend Development</h3>
            <p>
              HTML5, CSS3, JavaScript, React JS, Bootstrap, Tailwind CSS and
              jQuery.
            </p>
          </div>

          <div className="skill-card">
            <img src={logoimg3} alt="Backend Development" />
            <h3>Backend Development</h3>
            <p>
              PHP, Node.js, Express.js and REST API development for scalable
              applications.
            </p>
          </div>

          <div className="skill-card">
            <img src={logoimg4} alt="Database & Tools" />
            <h3>Database & Tools</h3>
            <p>MySQL, MongoDB, Git, GitHub, Figma and SEO best practices.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
