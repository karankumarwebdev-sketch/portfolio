import "../styles/about.css";
import aboutImg from "../assets/img/about-me.png";
import aboutImg2 from "../assets/img/about-me-bg.png";

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-header">
          <span>ABOUT ME</span>
          <h2>Who I Am</h2>
        </div>

        <div className="about-wrapper">
          <div className="about-image">
            <img src={aboutImg} alt="Web Developer" />
          </div>

          <div className="about-content">
            <h3>Web Designer & Developer</h3>

            <p>
              Passionate WordPress Developer and Web Designer with experience
              building modern, responsive, and performance-optimized websites
              for businesses and personal brands.
            </p>

            <p>
              Specialized in WordPress, Elementor, WooCommerce, ACF, custom
              theme development, and creating pixel-perfect user experiences
              focused on performance and usability.
            </p>

            <p>
              Skilled in HTML, CSS, JavaScript, React JS, Bootstrap, Tailwind
              CSS, PHP, Node.js, Express.js, MySQL, and MongoDB, with a strong
              focus on clean code and scalable solutions.
            </p>

            <div className="about-stats">
              <div>
                <h4>WordPress</h4>
                <span>Elementor/GenerateBlocks</span>
              </div>

              <div>
                <h4>React JS</h4>
                <span>Modern Frontend</span>
              </div>

              <div>
                <h4>SEO</h4>
                <span>Performance Focused</span>
              </div>

              <div>
                <h4>24/7</h4>
                <span>Continuous Learning</span>
              </div>

              <div>
                <h4>40+</h4>
                <span>Projects Completed</span>
              </div>

              <div>
                <h4>90+</h4>
                <span>PageSpeed Score</span>
              </div>

              <div>
                <h4>10+</h4>
                <span>Technologies</span>
              </div>

              <div>
                <h4>100%</h4>
                <span>Mobile Friendly</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
