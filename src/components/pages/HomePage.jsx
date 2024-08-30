import { ProjectCardSmall } from '../ProjectCardSmall';
import { projects } from '../../data/projects.js';
import '../../styles/HomePage.css';

function Home() {
  return (
    <>
      <main>
        <div className="main-sidebar"></div>
        <div className="main-content-container">
          <div className="content-title">
            <h2>An aspiring Front-End Developer</h2>
          </div>
          <div className="content-text">
            <p>
              <i>
                With a passion for learning and building intuitive web
                experiences.
              </i>
              <br />
              <br />
              This portfolio showcases my journey so far, featuring projects
              that highlight my growing skills in HTML, CSS, JavaScript, and
              React.
            </p>
          </div>
          <div className="content-projects-preview">
            <h3>Project selection</h3>
            {ProjectCardSmall(projects[0])}
            {ProjectCardSmall(projects[1])}
          </div>
        </div>
        <div className="main-sidebar"></div>
      </main>
    </>
  );
}

export default Home;
