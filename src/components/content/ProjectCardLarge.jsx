/* eslint-disable react/prop-types */
import htmlIcon from '../../assets/icons/html-icon.png';
import csslIcon from '../../assets/icons/css-icon.png';
import jsIcon from '../../assets/icons/js-icon.png';
import reactIcon from '../../assets/icons/react-icon.png';
import '../../styles/ProjectCardLarge.css';

export function ProjectCardLarge(props) {
  const { title, description, imageMed, liveLink, codeLink } = props.value;
  return (
    <>
      {/* <div>nav</div> */}
      <div className="projects-page-card">
        <div className="card-large-title">
          <p>{title}</p>
        </div>

        <div className="image-large-container">
          <img src={imageMed} alt="Project image" />
        </div>
        <br />

        <div className="card-large-links">
          <a href={liveLink} target="_blank">
            Live preview
          </a>
          <p>|</p>
          <a href={codeLink} target="_blank">
            View code
          </a>
        </div>
        <br />

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
    </>
  );
}
