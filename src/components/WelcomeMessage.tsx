import "./WelcomeMessage.css";
import avatarManJson from "../assets/wired-flat-268-avatar-man.json";
import("@dotlottie/player-component");

export default function WelcomeMessage() {
  return (
    <section id="welcome">
      <div className="welcome-container">
        <dotlottie-player
          src={JSON.stringify(avatarManJson)}
          autoplay
          loop={true}
          style={{ width: "100%", height: "250px" }}
          speed={0.7}
        />
        <div className="welcome-info-dump">
          <h1 id="welcome-heading">Hi, my name is</h1>
          <b className="welcome-name">Mateusz Boboryko</b>
          <p>
            I'm a recent Computer Science graduate that specializes in front-end
            web development. I bring ideas to life using the power of
            JavaScript, React, Vue, and other cutting-edge technologies. With a
            strong foundation in HTML and CSS, I excel in creating responsive
            and visually appealing websites that captivate users.
          </p>
        </div>
      </div>
    </section>
  );
}
