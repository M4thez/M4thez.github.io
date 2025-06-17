import "./ProjectCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

interface ProjectCardProps {
  title: string;
  description: string;
  images: string[];
  isReversed?: boolean;
  links: Record<string, string>; // key: string, value: string (URL)
}

export default function ProjectCard({
  title,
  description,
  images,
  isReversed,
  links,
}: ProjectCardProps) {
  return (
    <div className={`project-card ${isReversed ? "reversed" : ""}`}>
      <div className="project-content">
        <div className="project-imgs-grid">
          <a href={links.live} target="_blank">
            <img src={images[0]} alt="Main project image" />
          </a>
          {images.slice(1, 4).map((src: string, idx: number) => (
            <a href={links.live} target="_blank">
              <img key={idx} src={src} alt={`Small project image ${idx}`} />
            </a>
          ))}

          {/*       <a href={project.links.live} target="_blank">
        <img src={project.image_path} alt={project.title} />
      </a> */}
        </div>
        <div className="project-text">
          <h3>{title}</h3>
          <p>{description}</p>
          {links && (
            <ul className="project-links">
              {Object.entries(links).map(([key, url]) => (
                <li key={key}>
                  <a href={url} target="_blank">
                    <FontAwesomeIcon
                      icon={key === "github" ? faGithub : faPlay}
                    />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
