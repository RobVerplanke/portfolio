/* eslint-disable react/prop-types */
import truncateString from '../../utils/helperFunctions.jsx';
import '../../styles/ProjectCardSmall.css';

// Maximum length of the description in the small card component
const DESCRIPTION_MAX_LENGTH = 180;

export function ProjectCardSmall(props) {
  const { title, description, imageSmall, liveLink, codeLink } = props.value;
  return (
    <div className="projects-preview-card">
      {/* Display image and links on the left side */}
      <div className="left-container">
        <div className="image-container">
          <img src={imageSmall} alt="Project image" />
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
        <div className="card-description">
          <p>{truncateString(description, DESCRIPTION_MAX_LENGTH)}</p>
        </div>
      </div>
    </div>
  );
}
