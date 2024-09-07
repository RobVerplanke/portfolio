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
            <img src={imageSmall} alt={altText} width="183" height="183" />
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
        {/* Links container can stay separate */}
        <div className="project-links">
          <a className="text-nav-item" href={liveLink} target="_blank">
            Live preview
          </a>
          <a className="text-nav-item" href={codeLink} target="_blank">
            View code
          </a>
        </div>
      </div>
    </article>
  );
}
