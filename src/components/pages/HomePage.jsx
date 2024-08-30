import { CreateSmallCard } from '../CreateSmallCard';
import { projects } from '../../data/projects.js';
import '../../styles/HomePage.css';

const FIRST_PROJECT_ID = 1;
const SECOND_PROJECT_ID = 2;

const selectedProjectOne = projects.find(
  (project) => project.id === FIRST_PROJECT_ID
);
const selectedProjecTwo = projects.find(
  (project) => project.id === SECOND_PROJECT_ID
);

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
            <CreateSmallCard value={selectedProjectOne} />
            <CreateSmallCard value={selectedProjecTwo} />
            <CreateSmallCard value={selectedProjectOne} />
          </div>
        </div>
        <div className="main-sidebar"></div>
      </main>
    </>
  );
}

export default Home;
