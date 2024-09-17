/* eslint-disable react/prop-types */
import htmlIcon from '../../assets/icons/html-icon.png';
import csslIcon from '../../assets/icons/css-icon.png';
import javascriptIcon from '../../assets/icons/js-icon.png';
import reactIcon from '../../assets/icons/react-icon.png';

import '../../styles/ProjectCardLarge.css';

// Used to generate icons dynamicly from the object
const skillIcons = {
  html: htmlIcon,
  css: csslIcon,
  javascript: javascriptIcon,
  react: reactIcon,
};

export function ProjectCardLarge({ isOpen, value }) {
  const {
    subTitle,
    description,
    imageMed,
    altText,
    liveLink,
    codeLink,
    skills,
  } = value;

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

        {/* Display icons of the used techniques in this project */}
        <div className="project-card-large__skills">
          {skills.map((skill) => {
            return (
              <img key={skill} src={skillIcons[skill]} alt={`${skill} Icon`} />
            );
          })}
        </div>
      </div>
    </article>
  );
}
