import "./WelcomeMessage.css";
import avatarManJson from "../assets/wired-flat-268-avatar-man.json";
import("@dotlottie/player-component");
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";

export default function WelcomeMessage() {
  return (
    <section id="welcome">
      <div className="welcome-container">
        <dotlottie-player
          src={JSON.stringify(avatarManJson)}
          autoplay
          loop={true}
          style={{ width: "100%", height: "220px" }}
          speed={0.6}
        />
        <div className="welcome-social">
          <ul>
            <li>
              <a href="https://linkedin.com/in/mateusz-boboryko">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </li>
            <li>
              <a href="mailto:mateusz.boboryko@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </li>
            <li>
              <a href="https://github.com/M4thez">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          </ul>
        </div>
        <div className="welcome-info-dump">
          <h1 id="welcome-heading">Hi! My name is</h1>
          <b className="welcome-name">Mateusz Boboryko</b>
          <p>
            I'm a Junior Software Developer that specializes in frontend web
            development with a bachelor's degree in Computer Science and
            pursuing master's in the same discipline. I bring ideas to life
            using the power of JavaScript, React, Three.js, and other
            cutting-edge technologies. I have professional experience in
            creating Augmented Reality apps using web technologies.
          </p>
        </div>
      </div>
    </section>
  );
}
