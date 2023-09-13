import "./WelcomeMessage.css";
import avatarManJson from "../assets/wired-flat-268-avatar-man.json";
import("@dotlottie/player-component");

function WelcomeMessage() {
  return (
    <section className="welcome-section">
      <div className="welcome-container">
        <dotlottie-player
          src={JSON.stringify(avatarManJson)}
          autoplay
          loop={true}
          style={{ width: "100%", height: "250px" }}
          speed={0.7}
        />
        <div className="welcome-info-dump">
          <p>Hi, my name is</p>
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

export default WelcomeMessage;
