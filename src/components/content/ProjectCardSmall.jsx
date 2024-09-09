/* eslint-disable react/prop-types */
import { useState } from 'react';
import truncateString from '../../utils/helperFunctions.jsx';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';

import '../../styles/ProjectCardSmall.css';

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

  // Needed to decide if the full description or a shortened version is displayed
  const [isReadMoreActive, setIsReadMoreActive] = useState(false);

  function resizeDescriptionContent() {
    setIsReadMoreActive(!isReadMoreActive);
  }

  return (
    <article>
      <div className="projects-preview-card">
        <div className="content-container">
          {/* Image container */}
          <div className="image-container">
            <img src={imageSmall} alt={altText} width="183" height="183" />
          </div>
          <h4>
            {title} - {subTitle}
          </h4>

          {/* Project description area */}
          <div className="card-description">
            <p>
              {isReadMoreActive ? (
                <>
                  {description}
                  {/* Add a read more/less button at the end of a description text */}
                  <a
                    className="text-nav-item"
                    onClick={resizeDescriptionContent}
                  >
                    <ArrowLeftOutlinedIcon className="icon-nav-item" />
                    Read less
                  </a>
                </>
              ) : (
                <>
                  {truncateString(description)}
                  <a
                    className="text-nav-item"
                    onClick={resizeDescriptionContent}
                  >
                    <ArrowRightOutlinedIcon className="icon-nav-item" />
                    Read more
                  </a>
                </>
              )}
            </p>
          </div>
        </div>
        {/* Link for live preview and code */}
        <div className="project-links">
          <a className="text-nav-item" href={liveLink} target="_blank">
            Live version
          </a>
          <a className="text-nav-item" href={codeLink} target="_blank">
            View code
          </a>
        </div>
      </div>
    </article>
  );
}
