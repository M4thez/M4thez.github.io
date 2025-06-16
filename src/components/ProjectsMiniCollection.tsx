import "./ProjectsMiniCollection.css";
import projectsData from "../resources/projectsData.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

export default function ProjectsMiniCollection() {
  console.log(projectsData);
  const projectsCollection = projectsData.map((project) => (
    <div className="mini-project project-card" key={project.title}>
      <a href={project.links.live}>
        <img src={project.image_path} alt={project.title} />
      </a>
      <div className="mini-project-text">
        <h3>{project.title}</h3>
        <p dangerouslySetInnerHTML={{ __html: project.description }} />

        <ul className="project-links">
          {Object.entries(project.links).map(([key, url]) => (
            <li key={key}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={key === "repo" ? faGithub : faPlay} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  ));

  console.log("projectsCollection", projectsCollection);

  return <div className="mini-projects-collection">{projectsCollection}</div>;
}
