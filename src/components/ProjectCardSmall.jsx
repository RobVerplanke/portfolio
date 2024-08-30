/* eslint-disable react/prop-types */

import screenshot from '../assets/shopping-cart-small.png';
import '../styles/ProjectCardSmall.css';

export function ProjectCardSmall(props) {
  return (
    <div className="projects-preview-card">
      <div className="left-container">
        <div className="image-container">
          <img src={screenshot} alt="Project image" />
        </div>
        <div className="project-links">
          <a href={props.liveLink} target="_blank">
            Live preview
          </a>
          <p>|</p>
          <a href={props.codeLink} target="_blank">
            View code
          </a>
        </div>
      </div>
      <div className="right-container">
        <div className="card-title">
          <p>{props.title}</p>
        </div>
        <hr />
        <div className="card-description">
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
