import React from "react";
import "../components/Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact</h2>
      <p>If you'd like to connect, collaborate, or simply say hello, feel free to reach out!</p>

      <div className="contact-details">
        <p><strong>📧 Email:</strong> rasikahande02@gmail.com</p>
        <p><strong>📍 Location:</strong> Nagpur, Maharashtra, India</p>
        <p>
          <strong>🌐 GitHub:</strong>{" "}
          <a href="https://github.com/RasikaHande" target="_blank" rel="noreferrer">
            https://github.com/RasikaHande
          </a>
        </p>
        <p>
          <strong>🔗 LinkedIn:</strong>{" "}
          <a href="https://www.linkedin.com/in/rasika-hande" target="_blank" rel="noreferrer">
            linkedin.com/in/rasikahande
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
