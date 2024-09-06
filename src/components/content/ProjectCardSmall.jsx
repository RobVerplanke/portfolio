/* eslint-disable react/prop-types */
import truncateString from '../../utils/helperFunctions.jsx';
import '../../styles/ProjectCardSmall.css';

// Maximum length of the description in the small card component
const DESCRIPTION_MAX_LENGTH = 180;

export function ProjectCardSmall(props) {
  const {
    title,
    subTitle,
    description,
    imageSmall,
    altText,
    liveLink,
    codeLink,
  } = props.value;
  return (
    <article>
      <div className="projects-preview-card">
        {/* Display image and text in the same container */}
        <div className="content-container">
          <div className="image-container">
            <img src={imageSmall} alt={altText} />
          </div>
          <div className="card-description">
            <h4>
              {title} - {subTitle}
            </h4>
          </div>
          <div className="card-description">
            <p>{truncateString(description, DESCRIPTION_MAX_LENGTH)}</p>
          </div>
        </div>
        {/* Links container can stay separate */}
        <div className="project-links">
          <a href={liveLink} target="_blank">
            Live preview
          </a>
          <a href={codeLink} target="_blank">
            View code
          </a>
        </div>
      </div>
    </article>
  );
}
