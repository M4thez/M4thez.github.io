import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";

export default function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>Contact me on LinkedIn or directly via an email.</p>
      <div className="contact__links">
        <ul>
          <li>
            <FontAwesomeIcon icon={faLinkedinIn} /> {" | "}
            <a href="https://linkedin.com/in/mateusz-boboryko">
              linkedin.com/in/mateusz-boboryko
            </a>
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} /> {" | "}
            <a href="mailto:mateusz.boboryko@gmail.com">
              mateusz.boboryko@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
