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
      <div className="project-card-large">
        {/* Subtitle of the project */}
        <div className="project-card-large__subtitle">
          <p>{subTitle}</p>
        </div>
        {/* Image of the project */}
        <div className="project-card-large__image-container">
          <img src={imageMed} alt={altText} width="428" height="382" />
        </div>
        <br />
        <div
          tabIndex="-1"
          aria-hidden="true"
          className="project-card-large__links"
        >
          {/* Link to live website */}
          <a
            className="text-nav-item"
            tabIndex={isOpen ? '0' : '-1'}
            aria-hidden={isOpen ? 'false' : 'true'}
            href={liveLink}
            target="_blank"
          >
            Live version
          </a>
          <p>|</p>

          {/* Link to code on Github */}
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

        {/* Description of the project */}

        <div className="project-card-large__description">
          <p>{description}</p>
        </div>
        <br />

        {/* Icons of used techniques */}
        <div className="project-card-large__skills">
          <img src={htmlIcon} alt="HTML-5 icon" />
          <img src={csslIcon} alt="CSS-3 icon" />
          <img src={jsIcon} alt="Javascript icon" />
          <img src={reactIcon} alt="React icon" />
        </div>
      </div>
    </article>
  );
}
