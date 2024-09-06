import ProjectsNav from '../content/ProjectsNav.jsx';
import '../../styles/ProjectsPage.css';

function Projects() {
  return (
    <main>
      <div className="main-content-container">
        <div className="content-title">
          <h2>Recent projects</h2>
        </div>
        <br />
        <p>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
        <ProjectsNav />
      </div>
    </main>
  );
}

export default Projects;
