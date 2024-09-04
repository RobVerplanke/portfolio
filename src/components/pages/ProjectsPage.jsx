import { useData } from '../../context/DataContext.jsx';
import { ProjectCardLarge } from '../content/ProjectCardLarge';

function Projects() {
  const { allProjects } = useData();

  return (
    <main>
      <div className="main-content-container">
        <div className="content-title">
          <h2>Recent projects</h2>
        </div>
        {allProjects.map((project) => (
          <ProjectCardLarge key={project.id} value={project} />
        ))}
      </div>
    </main>
  );
}

export default Projects;
