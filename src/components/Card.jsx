import { Link } from "react-router-dom";

function Card({ title, description, date, image, link }) {
  return (
    <Link className="project-card" to={link}>
      <div className="project-image-wrap" aria-hidden="true">
        <img className="project-image" src={image} alt="" />
      </div>

      <div className="project-content">
        <span className="project-tag">Project</span>
        <h2>{title}</h2>
        <p>{description}</p>
        {date && <p className="project-meta">Created on {date}</p>}
      </div>
    </Link>
  );
}

export default Card;