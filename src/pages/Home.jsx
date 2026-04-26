import "../App.css";
import reactFactsImg from "/Reactfacts.png";
import Card from "../components/Card";

function Home() {
  const projects = [
    {
      id: 1,
      title: "React Facts",
      description: "A simple React app that displays fun facts about React.",
      date: "2026-04-26",
      image: "../../public/Reactfacts.png",
      link: "/facts"
    },
    // Add more projects here as needed
  ];
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