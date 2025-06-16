import "./Projects.css";
import ProjectCard from "./ProjectCard";
import ProjectsMiniCollection from "./ProjectsMiniCollection";

export default function Projects() {
  const cosmicDesc =
    "Educational interactive web application related to outer space. My biggest personal project. Features include: Solar System simulation, interaction and inspection of 3D models, dynamically displayed data from NASA APIs, user accounts, and quizzes.\nFront-end is made in React and Three.js, back-end in Firebase.";
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div id="projects-flex">
        <ProjectCard
          title="Cosmic - Bachelor's degree project"
          description={cosmicDesc}
          images={[
            "src/assets/cosmic/Mars.webp",
            "src/assets/cosmic/RoverPhotos.webp",
            "src/assets/cosmic/Rover3DWide.webp",
            "src/assets/cosmic/Earth.webp",
          ]}
          isReversed={false}
          links={{
            github: "https://github.com/M4thez/cosmic-repo",
            live: "https://m4thez.github.io/cosmic-repo/",
          }}
        />
        {/* <ProjectCard
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
        /> */}
      </div>
      <ProjectsMiniCollection />
    </section>
  );
}
