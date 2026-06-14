import "../styles/footer.css";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="footer-content">

        <h2>Let's Build Something Amazing</h2>

        <p>
          Available for freelance projects, collaborations,
          and full-time opportunities.
        </p>

        <div className="footer-socials">

          <a
            href="https://www.linkedin.com/in/karan-kumar683/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://github.com/your-profile"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a href="mailto:karankumarwebdev@gmail.com">
            <FaEnvelope />
          </a>

        </div>

        <div className="footer-bottom">
          <p>
            © {year} Karan. Crafted with React & Passion.
          </p>
        </div>

      </div>

    </footer>
  );
}

export default Footer;