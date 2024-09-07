/* eslint-disable react/prop-types */
import htmlIcon from '../../assets/icons/html-icon.png';
import csslIcon from '../../assets/icons/css-icon.png';
import jsIcon from '../../assets/icons/js-icon.png';
import reactIcon from '../../assets/icons/react-icon.png';

import '../../styles/ProjectCardLarge.css';

export function ProjectCardLarge({ isOpen, value }) {
  const { subTitle, description, imageMed, altText, liveLink, codeLink } =
    value;

  return (
    <article>
      <div className="projects-page-card">
        <div className="image-large-container">
          <img src={imageMed} alt={altText} width="428" height="382" />
        </div>
        <br />
        <div tabIndex="-1" aria-hidden="true" className="card-large-links">
          <a
            className="text-nav-item"
            tabIndex={isOpen ? '0' : '-1'}
            aria-hidden={isOpen ? 'false' : 'true'}
            href={liveLink}
            target="_blank"
          >
            Live preview
          </a>
          <p>|</p>
          <a
            className="text-nav-item"
            tabIndex={isOpen ? '0' : '-1'}
            aria-hidden={isOpen ? 'false' : 'true'}
            href={codeLink}
            target="_blank"
          >
            View code
          </a>
        </div>
        <br />

        <div className="card-large-subtitle">
          <p>{subTitle}</p>
        </div>
        <div className="card-large-description">
          <p>{description}</p>
        </div>
        <br />

        <div className="card-large-skills">
          <img src={htmlIcon} alt="HTML-5 icon" />
          <img src={csslIcon} alt="CSS-3 icon" />
          <img src={jsIcon} alt="Javascript icon" />
          <img src={reactIcon} alt="React icon" />
        </div>
      </div>
    </article>
  );
}
