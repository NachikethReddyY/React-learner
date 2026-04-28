import "../styles/home.css";
import Card from "../components/Card";
import projects from "../Data/projects";

function Home() {
  return (
    <>
      <main className="hub">
        <header className="hub-header">
          <p className="eyebrow">Mini project hub</p>
          <h1>My React Projects</h1>
          <p className="intro">A growing collection of small projects I am building with React.</p>
        </header>

        <section className="project-grid" aria-label="Project cards">
          {projects.map((project) => (
            <Card key={project.id} {...project} />
          ))}
        </section>
      </main>
    </>
  );
}

export default Home;  