import { Link } from "react-router-dom";
import "./App.css";
import reactFactsImg from "/Reactfacts.png";

function App() {
  return (
    <main className="hub">
      <header className="hub-header">
        <p className="eyebrow">Mini project hub</p>
        <h1>My React Projects</h1>
        <p className="intro">A growing collection of small projects I am building with React.</p>
      </header>

      <section className="project-grid" aria-label="Project cards">
        <Link className="project-card project-card--feature" to="/facts">
          <div className="project-image-wrap" aria-hidden="true">
            <img className="project-image" src={reactFactsImg} alt="" />
          </div>

          <div className="project-content">
            <span className="project-tag">Project 01</span>
            <h2>React Facts</h2>
            <p>
              Dark-themed card layout with an interactive route. Click this card to open
              the project details page.
            </p>
            <p className="project-meta">Created on 26th April 2026</p>
          </div>
        </Link>
      </section>
    </main>
  )
}

export default App
