import ProjectsNav from '../content/ProjectsNav.jsx';
import '../../styles/ProjectsPage.css';

function Projects() {
  return (
    <main>
      <div className="main-content-container">
        <div className="content-title">
          <h2>Recent projects</h2>
        </div>
        <ProjectsNav />
      </div>
    </main>
  );
}

export default Projects;
