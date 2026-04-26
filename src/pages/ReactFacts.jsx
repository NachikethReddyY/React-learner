import "../facts.css";

const ReactFacts = () => {
  return (
    <main className="facts-page">
      <section className="facts-shell" aria-label="React facts card">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="React logo"
          className="facts-logo"
        />

        <h1>Fun Facts About React</h1>

        <ol className="facts-list">
          <li>Was first released in 2013 </li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100K stars on GitHub</li>
          <li>Is maintained by Meta</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ol>

        <p className="facts-footer">&copy; 2026 Nachiketh Reddy. All rights reserved.</p>
      </section>
    </main>
  );
};

export default ReactFacts;