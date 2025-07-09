/* eslint-disable react/prop-types */

import { formatProjectDescription } from '../../utils/helperFunctions.jsx';
import htmlIcon from '../../assets/icons/html-icon.png';
import csslIcon from '../../assets/icons/css-icon.png';
import sassIcon from '../../assets/icons/icons8-sass.png';
import javascriptIcon from '../../assets/icons/js-icon.png';
import reactIcon from '../../assets/icons/react-icon.png';
import tailwindIcon from '../../assets/icons/tailwind-css-icon.png';
import typeScriptIcon from '../../assets/icons/typescript-icon.png';

import '../../styles/ProjectCardLarge.css';

// Used to generate icons dynamicly from the object
const skillIcons = {
  html: htmlIcon,
  css: csslIcon,
  scss: sassIcon,
  javascript: javascriptIcon,
  react: reactIcon,
  tailwind: tailwindIcon,
  typescript: typeScriptIcon,
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
    isWebApp,
  } = value;

  const formattedDescription = formatProjectDescription(description);

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
          {isWebApp ? (
            <a
              className="project-card-large__text-nav-item"
              href={liveLink}
              target="_blank"
            >
              Live version
            </a>
          ) : (
            <p className="project-card-large__text-nav-item">Local app</p>
          )}
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

        {/* Description of the project */}
        <div className="project-card-large__description">
          {formattedDescription}
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
