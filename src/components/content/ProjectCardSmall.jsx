/* eslint-disable react/prop-types */
import { useState } from 'react';
import truncateString, {
  formatProjectDescription,
} from '../../utils/helperFunctions.jsx';
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
    isWebApp,
  } = props.value;

  const formattedDescription = formatProjectDescription(description);

  // Needed to decide if the full description or a shortened version is displayed
  const [isReadMoreActive, setIsReadMoreActive] = useState(false);

  function resizeDescriptionContent() {
    setIsReadMoreActive(!isReadMoreActive);
  }

  return (
    <article>
      <div className="project-card-small">
        <div className="content-container">
          {/* Image container */}
          <div className="project-card-small__image-container">
            <img src={imageSmall} alt={altText} width="183" height="183" />
          </div>
          <h3>
            {title} - {subTitle}
          </h3>

          {/* Project description area */}
          <div className="project-card-small__description">
            {isReadMoreActive ? (
              <>
                {formattedDescription}
                {/* Add a read more/less button at the end of a description text */}
                <a
                  role="button"
                  tabIndex="0"
                  className="project-card-small__read-nav-item"
                  onClick={resizeDescriptionContent}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      resizeDescriptionContent();
                    }
                  }}
                >
                  <ArrowLeftOutlinedIcon className="project-card-small__icon-nav-item" />
                  Read less
                </a>
              </>
            ) : (
              <>
                {truncateString(formattedDescription)}
                <a
                  role="button"
                  tabIndex="0"
                  className="project-card-small__read-nav-item"
                  onClick={resizeDescriptionContent}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      resizeDescriptionContent();
                    }
                  }}
                >
                  <ArrowRightOutlinedIcon className="project-card-small__icon-nav-item" />
                  Read more
                </a>
              </>
            )}
          </div>
        </div>
        {/* Link for live preview and code */}
        <div className="project-card-small__links">
          {isWebApp ? (
            <a
              className="project-card-small__text-nav-item"
              href={liveLink}
              target="_blank"
            >
              Live version
            </a>
          ) : (
            <p>Local app</p>
          )}
          <a
            className="project-card-small__text-nav-item"
            href={codeLink}
            target="_blank"
          >
            View code
          </a>
        </div>
      </div>
    </article>
  );
}
