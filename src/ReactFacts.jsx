import "./facts.css";

const ReactFacts = () => {
  return (
    <main className="facts-page">
      <section className="facts-shell" aria-label="React facts card">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="React logo"
          className="facts-logo"
        />

        <h1>Reason I am excited to learn React</h1>

        <ol className="facts-list">
          <li>React is a popular library, so I will be able to fit in with all the coolest devs out there.</li>
          <li>I am more likely to get a job as a front end developer if I know React.</li>
        </ol>

        <p className="facts-footer">&copy; 2026 Nachiketh Reddy. All ri!@ghts reserved.</p>
      </section>
    </main>
  );
};

export default ReactFacts;
