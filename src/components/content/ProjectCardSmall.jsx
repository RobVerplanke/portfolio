/* eslint-disable react/prop-types */
import { useState } from 'react';
import truncateString from '../../utils/helperFunctions.jsx';
import '../../styles/ProjectCardSmall.css';

// Maximum length of the description in the small card component

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

  const [isReadMoreActive, setIsReadMoreActive] = useState(false);

  function resizeDescriptionContent() {
    setIsReadMoreActive(!isReadMoreActive);
  }

  return (
    <article>
      <div className="projects-preview-card">
        {/* Display image and text in the same container */}
        <div className="content-container">
          <div className="image-container">
            <img src={imageSmall} alt={altText} />
          </div>
          <h4>
            {title} - {subTitle}
          </h4>
          <div className="card-description">
            <p>
              {isReadMoreActive ? (
                <>
                  {description}
                  <a
                    className="card-description-link"
                    onClick={resizeDescriptionContent}
                  >
                    ...Read less
                  </a>
                </>
              ) : (
                <>
                  {truncateString(description)}
                  <a
                    className="card-description-link"
                    onClick={resizeDescriptionContent}
                  >
                    ...Read more
                  </a>
                </>
              )}
            </p>
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
