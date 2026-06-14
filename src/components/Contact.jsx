import "../styles/contact.css";
import "../styles/global.css";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setLoading(false);
        setStatus("success");
        form.current.reset();

        setTimeout(() => {
          setStatus("");
        }, 5000);
      })
      .catch(() => {
        setLoading(false);
        setStatus("error");
      });
  };
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-header">
          <span>CONTACT</span>
          <h2>Let's Work Together</h2>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info">
            <h3>Get In Touch</h3>

            <p>
              Have a project in mind or looking for a developer to bring your
              ideas to life? Feel free to reach out. I'm always open to
              discussing new opportunities and collaborations.
            </p>

            <div className="info-item">
              <h4>Email</h4>
              <a href="mailto:karankumarwebdev@gmail.com">
                karankumarwebdev@gmail.com
              </a>
            </div>

            <div className="info-item">
              <h4>Location</h4>
              <span>India</span>
            </div>

            <div className="info-item">
              <h4>Availability</h4>
              <span>Open for Freelance & Full-Time Roles</span>
            </div>
          </div>

          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                rows="6"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn" disabled={loading}>
            
              {loading ? "Sending..." : "Send Message"}
            </button>
            {status === "success" && (
              <p className="success-message">✓ Message sent successfully!</p>
            )}

            {status === "error" && (
              <p className="error-message">
                ✕ Failed to send message. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
