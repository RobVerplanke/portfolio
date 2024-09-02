/* eslint-disable react/prop-types */
import screenshot from '../assets/shopping-cart-xs.png';
import '../styles/ProjectCardSmall.css';

export function CreateSmallCard(props) {
  const { title, description, liveLink, codeLink } = props.value;
  return (
    <div className="projects-preview-card">
      {/* Display image and links on the left side */}
      <div className="left-container">
        <div className="image-container">
          <img src={screenshot} alt="Project image" />
        </div>
        <div className="project-links">
          <a href={liveLink} target="_blank">
            Live preview
          </a>
          <p>|</p>
          <a href={codeLink} target="_blank">
            View code
          </a>
        </div>
      </div>

      {/* Display text content on the right side */}
      <div className="right-container">
        <div className="card-title">
          <p>{title}</p>
        </div>
        <hr />
        <div className="card-description">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
