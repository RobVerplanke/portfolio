import { useData } from '../../context/DataContext.jsx';
import { ProjectCardLarge } from '../content/ProjectCardLarge';
import '../../styles/ProjectsPage.css';

function Projects() {
  const { allProjects } = useData();

  return (
    <main>
      <div className="main-content-container">
        <div className="content-title">
          <h2>Recent projects</h2>
        </div>
        <div className="projects-card-holder">
          {allProjects.map((project) => (
            <ProjectCardLarge key={project.id} value={project} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Projects;
