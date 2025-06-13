import "./Projects.css";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div id="projects-flex">
        <ProjectCard
          title="Cosmic - Bachelor's degree project"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis doloribus natus unde voluptatibus, id quaerat error minus ab suscipit provident molestias, ratione deserunt nostrum at hic placeat qui dicta earum?"
          images={[
            "src/assets/cosmic/Mars.png",
            "src/assets/cosmic/RoverPhotos.png",
            "src/assets/cosmic/Rover3DWide.png",
            "src/assets/cosmic/Earth.png",
          ]}
          isReversed={false}
          links={{
            github: "https://github.com/M4thez/cosmic-repo",
            live: "https://m4thez.github.io/cosmic-repo/",
          }}
        />
        <ProjectCard
          title="EUNICoast Search Engine"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis doloribus natus unde voluptatibus, id quaerat error minus ab suscipit provident molestias, ratione deserunt nostrum at hic placeat qui dicta earum?"
          images={[
            "src/assets/nathan-jennings-cosmos.jpg", // Big Image
            "src/assets/nathan-jennings-cosmos.jpg",
            "src/assets/nathan-jennings-cosmos.jpg",
            "src/assets/nathan-jennings-cosmos.jpg",
          ]}
          isReversed={true}
          links={{
            github: "https://github.com/M4thez/MastersProject",
          }}
        />
      </div>
    </section>
  );
}
